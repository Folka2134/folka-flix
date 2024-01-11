import React from "react";
import MediaCard from "./MediaCard";

const mockItems = [1, 2, 3, 4, 5];

const MediaList = () => {
  return (
    <>
      <h2 className="my-5 text-3xl">List title</h2>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:flex lg:flex-wrap">
        {mockItems.map((item) => (
          <MediaCard />
        ))}
      </div>
    </>
  );
};

export default MediaList;
