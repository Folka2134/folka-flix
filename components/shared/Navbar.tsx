import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

import { FilmIcon } from "@heroicons/react/24/solid";
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import { TvIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex h-20 items-center justify-between bg-[#161D2F] px-6">
        <Link href="/">
          <FilmIcon className="h-10 w-10 fill-[#FD4746]" />
        </Link>

        <nav className="flex w-full items-center justify-center gap-5">
          <Link href="/">
            <Squares2X2Icon className="h-8 w-8 fill-[#5B6990] transition-colors duration-200 hover:fill-white" />
          </Link>
          <Link href="/">
            <FilmIcon className="h-8 w-8 fill-[#5B6990] transition-colors duration-200 hover:fill-white" />
          </Link>
          <Link href="/">
            <TvIcon className="h-8 w-8 fill-[#5B6990] transition-colors duration-200 hover:fill-white" />
          </Link>
          <Link href="/">
            <BookmarkIcon className="h-8 w-8 fill-[#5B6990] transition-colors duration-200 hover:fill-white" />
          </Link>
        </nav>

        <div className="flex justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <button className="rounded-full">
              <Link href="/sign-in">Login</Link>
            </button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
