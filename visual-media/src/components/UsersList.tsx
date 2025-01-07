import { AppDispatch, fetchUsers } from "../store";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const UsersList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return "Users List";
};

export default UsersList;
