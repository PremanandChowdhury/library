import React from "react";

// Local imports
import { User } from "@/typings";
import { useFetchAlbumsQuery } from "@/store";

interface Props {
  user: User;
}

const AlbumsList: React.FC<Props> = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  console.log(
    JSON.stringify(data, null, 2),
    '\n Error ', error,
    '\n isLoading ', isLoading
  )
  return <div>Albums for {user.name}</div>;
};

export default AlbumsList;
