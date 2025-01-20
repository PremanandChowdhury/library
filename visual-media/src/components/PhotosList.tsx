import React from "react";

// Local imports
import { IAlbum, IPhoto } from "@/typings";
import { useAddPhotoMutation, useFetchPhotosQuery } from "@/store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotoListItem";

interface Props {
  album: IAlbum;
}

const PhotosList: React.FC<Props> = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = (): void => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-18 w-8" times={4} />;
  } else if (error) {
    content = <div>Error while loading albums.</div>;
  } else {
    content = data?.map((photo: IPhoto) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button onClick={handleAddPhoto} loading={addPhotoResults.isLoading}>
          + Add Photo
        </Button>
      </div>
      <div className="mx-2 flex gap-2 flex-wrap justify-center">{content}</div>
    </div>
  );
};

export default PhotosList;
