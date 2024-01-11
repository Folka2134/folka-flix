import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { BookmarkIcon } from "@heroicons/react/24/outline";

const MediaCard = () => {
  return (
    <Card className="flex flex-col border-none md:w-56 xl:w-64">
      <CardHeader className="flex h-36 items-end rounded-xl bg-purple-800">
        <span className="w-auto rounded-full bg-black bg-opacity-30 p-3">
          <BookmarkIcon className="h-6 w-6 hover:fill-white" />
        </span>
      </CardHeader>

      <CardContent className="flex gap-5 px-0 py-3">
        <p>year</p>
        <p>type</p>
        <p>age</p>
      </CardContent>
      <CardFooter className="px-0 py-0">
        <p className="text-2xl font-semibold">Card Title</p>
      </CardFooter>
    </Card>
  );
};

export default MediaCard;
