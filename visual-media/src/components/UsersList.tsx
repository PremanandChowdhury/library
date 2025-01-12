import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Local imports
import { fetchUsers, addUser } from "@/store";
import { IFetchResponse, User } from "@/typings";
import useThunk from "@/hooks/useThunk";
import Skeleton from "./Skeleton";
import Button from "./Button";
import UsersListItem from "./UsersListItem";

const UsersList: React.FC = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

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
      return <UsersListItem key={user.id} user={user} />;
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
      {isCreatingUser && <Skeleton times={1} className="h-10 w-full" />}
    </div>
  );
};

export default UsersList;
