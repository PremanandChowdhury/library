import React from "react";
import { GoTrashcan } from "react-icons/go";

// Local imports
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

interface Album {
  album: {
    id: number;
    title: string;
  };
}

const AlbumsListItem: React.FC<Album> = ({ album }): JSX.Element => {
  const header = (
    <div className="flex justify-center items-center gap-3">
      <Button>
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      <p>List of Photos related to the album.</p>
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
