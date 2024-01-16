import React from "react";
import MediaCard from "./MediaCard";
import { IMedia } from "@/lib/database/models/media.model";

type MediaListProps = {
  media: IMedia[];
  title: string;
};

const MediaList = ({ media, title }: MediaListProps) => {
  return (
    <>
      <h2 className="my-5 text-3xl">{title}</h2>
      <div className="flex flex-wrap justify-center gap-10 lg:justify-start">
        {media.map((item) => (
          <MediaCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default MediaList;
