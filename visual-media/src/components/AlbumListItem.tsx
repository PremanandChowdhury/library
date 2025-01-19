import React from "react";
import { GoTrashcan } from "react-icons/go";

// Local imports
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "@/store";
import { IAlbum } from "@/typings";
import PhotosList from "@components/PhotosList";

interface Album {
  album: IAlbum;
}

const AlbumsListItem: React.FC<Album> = ({ album }): JSX.Element => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button loading={results.isLoading} onClick={handleRemoveAlbum}>
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
