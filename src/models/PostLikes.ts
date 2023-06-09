import mongoose from "mongoose"

const PostLikes = new mongoose.Schema(
  {
    postId: { type: String, require: true},
    instaId: { type: String, require: true },
    tiktokId: { type: String, require: true },
    postLike: { type: Number },
    instaLike: { type: Number },
    tiktokLike: { type: Number },
  }
)

PostLikes.index( { postId: 1}, { unique: true })

const model = mongoose.model('PostLike', PostLikes);
export default model