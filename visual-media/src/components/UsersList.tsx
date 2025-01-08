import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Local imports
import { AppDispatch, fetchUsers } from "../store";
import { IFetchResponse, User } from "@/typings";
import Skeleton from "./Skeleton";

const UsersList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { isLoading, data, error } = useSelector(
    (state: { users: IFetchResponse }) => {
      return state.users;
    }
  );

  if (isLoading) return <Skeleton times={4} className="h-10 w-full" />;
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

  return <>{renderUsersData}</>;
};

export default UsersList;
