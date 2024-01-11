import MediaList from "@/components/MediaList";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div>
        <MediaList />
      </div>
    </main>
  );
}
