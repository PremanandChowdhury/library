import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Local imports
import { AppDispatch, fetchUsers, addUser } from "../store";
import { IFetchResponse, User } from "@/typings";
import Skeleton from "./Skeleton";
import Button from "./Button";

const UsersList: React.FC = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState<boolean>(true);
  const [loadingUsersError, setLoadingUsersError] = useState<null | Error>(
    null
  );
  const [isCreatingUser, setIsCreatingUser] = useState<boolean>(false);
  const [creatingUserError, setIsCreatingUserError] = useState<null | Error>(
    null
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
      .unwrap()
      .catch((err) => setLoadingUsersError(err))
      .finally(() => setIsLoadingUsers(false));
  }, [dispatch]);

  const handleAddUser = (): void => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((err) => setIsCreatingUserError(err))
      .finally(() => setIsCreatingUser(false));
  };

  const { data } = useSelector(
    (state: { users: IFetchResponse }): IFetchResponse => {
      return state.users;
    }
  );

  if (isLoadingUsers) return <Skeleton times={3} className="h-10 w-full" />;
  if (loadingUsersError) return <div>Failed loading list of Users</div>;

  const renderUsersData = data.map((user: User) => {
    return (
      <div key={user.id} className="mb-2 border rounded mt-2">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex justify-between my-3">
        <h1 className="mb-2 text-xl">Users</h1>
        {isCreatingUser ? (
          "Creating User"
        ) : (
          <Button onClick={handleAddUser}>+ Add User</Button>
        )}
        {
          creatingUserError && 'Error while creating user...'
        }
      </div>
      {renderUsersData}
    </div>
  );
};

export default UsersList;
