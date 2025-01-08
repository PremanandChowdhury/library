import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Local imports
import { AppDispatch, fetchUsers, addUser } from "../store";
import { IFetchResponse, User } from "@/typings";
import Skeleton from "./Skeleton";
import Button from "./Button";

const UsersList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = (): void => {
    dispatch(addUser());
  };

  const { isLoading, data, error } = useSelector(
    (state: { users: IFetchResponse }): IFetchResponse => {
      return state.users;
    }
  );

  if (isLoading) return <Skeleton times={3} className="h-10 w-full" />;
  if (error) return <div>Failed loading list of Users</div>;

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
        <Button onClick={handleAddUser}>+ Add User</Button>
      </div>
      {renderUsersData}
    </div>
  );
};

export default UsersList;
