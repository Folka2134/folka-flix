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
import { IMedia } from "@/lib/database/models/media.model";
import { Button } from "./ui/button";
import { auth } from "@clerk/nextjs";
import { createBookmark } from "@/lib/actions/media.actions";
import BookmarkButton from "./shared/BookmarkButton";
import Link from "next/link";

type MediaCardProps = {
  data: IMedia;
};

const MediaCard = ({ data }: MediaCardProps) => {
  return (
    <Card className="flex w-64 flex-col border-none xl:w-64">
      <Link href={`/media/${data.id}`}>
        <CardHeader className="flex h-36 items-end rounded-xl bg-black p-0">
          {/* <BookmarkButton mediaId={data.id} userId={userId} /> */}
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
            className="z-0 rounded-xl p-2 pt-0 transition-transform duration-200 hover:scale-105"
          />
        </CardHeader>

        <CardContent className="flex justify-between gap-5 px-0 py-3">
          <p>{data.media_type.toUpperCase()}</p>
          <p>{data.release_date ? data.release_date : data.first_air_date}</p>
        </CardContent>
        <CardFooter className=" px-0 py-0">
          <p className="truncate text-2xl font-semibold">
            {data.name ? data.name : data.title}
          </p>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default MediaCard;
