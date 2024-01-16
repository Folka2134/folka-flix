import { auth } from "@clerk/nextjs";
import React from "react";

const BookmarkPage = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return <div>BookmarkPage</div>;
};

export default BookmarkPage;
