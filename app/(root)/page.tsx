import MediaList from "@/components/MediaList";
import { trending } from "@/constants";
import {
  getDataFromApi,
  getTrendingFromApi,
} from "@/lib/actions/media.actions";

export default async function Home() {
  // const movies = await getDataFromApi();
  // const trending = await getTrendingFromApi();

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div>
        {/* <MediaList media={movies.results} title="movies" /> */}
        <MediaList media={trending.results} title="Trending" />
      </div>
    </main>
  );
}
