import React from "react";
import { GoTrashcan } from "react-icons/go";

// Local imports
import { IPhoto } from "@/typings";
import { useRemovePhotosMutation } from "@/store";

interface Props {
  photo: IPhoto;
}

const PhotosListItem: React.FC<Props> = ({ photo }) => {
  console.log("album data", photo);

  const [removePhoto] = useRemovePhotosMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo)
  };

  return (
    <div className="relative m-2 cursor-pointer" onClick={handleRemovePhoto}>
      <img className="h-20 w-20" src={photo.url} alt="Abstract Photo" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl" />
      </div>
    </div>
  );
};

export default PhotosListItem;
