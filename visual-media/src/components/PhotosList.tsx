import React from "react";

// Local imports
import { IAlbum } from "@/typings";

interface Props {
  album: IAlbum;
}

const PhotosList: React.FC<Props> = ({ album }) => {
  console.log("Album: ", album);

  return "PhotoList";
};

export default PhotosList;
