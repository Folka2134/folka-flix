import { Schema, model, models } from "mongoose";

const BookmarkSchema = new Schema({
  userId: { type: String, required: true },
  mediaId: { type: Number, required: true },
})

export const Bookmark = models.Bookmark || model('Bookmark', BookmarkSchema);

