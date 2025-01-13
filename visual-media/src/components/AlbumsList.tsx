import React from "react";

// Local imports
import { User } from "@/typings";

interface Props {
  user: User;
}

const AlbumsList: React.FC<Props> = ({ user }) => {
  return <div>Albums for {user.name}</div>;
};

export default AlbumsList;
