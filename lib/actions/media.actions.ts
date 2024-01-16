import { CreateBookmarkParams } from "@/types";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";
import { Bookmark } from "../database/models/bookmark.model";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzA0ZThhYTI5NjBkNDNhMmMzZDMwOWQzYzY3OTA0MiIsInN1YiI6IjYyN2I4MWY3NjYzNjI3MGNlNjUyOTAzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6X2RMm3TyA8F8m0fps-SFA4VPy4sHeZtkFswTsHQris",
  },
};

export const getDataFromApi = async () => {
  const movies = await fetch("https://api.themoviedb.org/3/discover/movie", options)

  if(!movies.ok) {
    throw new Error("Failed to fetch data")
  }

  return movies.json()
}

export const getDataByIdFromApi = async (id: string) => {
  
}

export const getTrendingFromApi = async () => {
  try {
    const trending = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
    
    if(!trending) {
      throw new Error("Failed to fetch data") 
    }

    return trending.json()
  } catch (error) {
    handleError(error)
  }
}

export async function createBookmark({userId, mediaId}: CreateBookmarkParams) {
  try {
    await connectToDatabase()

    const newBookmark = await Bookmark.create({userId, mediaId})
    return JSON.parse(JSON.stringify(newBookmark))
  } catch (error) {
    handleError(error)
  }
}

