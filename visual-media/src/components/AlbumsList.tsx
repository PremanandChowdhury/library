import React from "react";

// Local imports
import { IAlbum, User } from "@/typings";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "@/store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import AlbumsListItem from "./AlbumListItem";

interface Props {
  user: User;
}

const AlbumsList: React.FC<Props> = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-fulll" times={3} />;
  } else if (error) {
    content = <div>Error while loading albums.</div>;
  } else {
    content = data?.map((album: IAlbum) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div>
      <div className="m-2 flex items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button onClick={handleAddAlbum} loading={results.isLoading}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumsList;
