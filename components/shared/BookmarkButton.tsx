"use client";

import React from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";

import { Button } from "../ui/button";
import { createBookmark } from "@/lib/actions/media.actions";
import { auth } from "@clerk/nextjs";

const handleButtonClick = ({ userId, mediaId }: any) => {
  createBookmark({ userId, mediaId });
};

const BookmarkButton = ({ mediaId, userId }: any) => {
  return (
    <span className="absolute z-10 w-auto rounded-full bg-black bg-opacity-30 p-3">
      <Button
        className="m-0 flex h-6 w-6 justify-center p-0"
        onClick={() => handleButtonClick({ userId, mediaId })}
      >
        <BookmarkIcon className="h-6 w-6 hover:fill-white" />
      </Button>
    </span>
  );
};

export default BookmarkButton;
