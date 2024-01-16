import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

import { FilmIcon } from "@heroicons/react/24/solid";
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import { TvIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <header className="w-full md:p-6 lg:w-auto">
      <div className="flex items-center justify-between bg-[#161D2F] px-5 py-4 md:rounded-lg lg:h-3/4 lg:flex-col lg:justify-start lg:px-5 lg:py-6">
        <Link href="/">
          <FilmIcon className="h-10 w-10 fill-[#FD4746]" />
        </Link>

        <nav className="flex w-full items-center justify-center gap-7 lg:mt-14 lg:flex-col">
          <Link href="/">
            <Squares2X2Icon className="h-7 w-7 fill-[#5B6990] transition-colors duration-200 hover:fill-white" />
          </Link>
          <Link href="/movies">
            <FilmIcon className="h-7 w-7 fill-[#5B6990] transition-colors duration-200 hover:fill-white" />
          </Link>
          <Link href="/shows">
            <TvIcon className="h-7 w-7 fill-[#5B6990] transition-colors duration-200 hover:fill-white" />
          </Link>
          <Link href="/bookmarks">
            <BookmarkIcon className="h-7 w-7 fill-[#5B6990] transition-colors duration-200 hover:fill-white" />
          </Link>
        </nav>

        <div className="flex justify-end gap-3 lg:mt-auto">
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
