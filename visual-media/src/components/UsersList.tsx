import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Local imports
import { fetchUsers, addUser } from "@/store";
import { IFetchResponse, User } from "@/typings";
import Skeleton from "./Skeleton";
import Button from "./Button";
import useThunk from "@/hooks/useThunk";

const UsersList: React.FC = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  useEffect(() => {
    doFetchUsers();
  }, []);

  const handleAddUser = (): void => {
    doCreateUser();
  };

  const { data } = useSelector(
    (state: { users: IFetchResponse }): IFetchResponse => {
      return state.users;
    }
  );

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={10} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Failed loading list of Users</div>;
  } else {
    content = data?.map((user: User) => {
      return (
        <div key={user.id} className="mb-2 border rounded mt-2">
          <div className="flex p-2 justify-between items-center cursor-pointer">
            {user.name}
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="flex justify-between my-3">
        <h1 className="mb-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleAddUser}>
          + Add User
        </Button>
        {creatingUserError && "Error while creating user..."}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
