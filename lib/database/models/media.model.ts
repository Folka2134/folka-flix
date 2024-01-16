import { Schema, model, models, Document } from "mongoose";

export interface IMedia extends Document {
  adult: boolean,
  backdrop_path: string,
  genre_ids: [string],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  poster_path: string,
  release_date?: string,
  first_air_date?: string,
  title?: string,
  name?: string,
  media_type: string,
  vote_average: number,
  vote_count: number
}