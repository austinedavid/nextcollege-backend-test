import mongoose from "mongoose";

interface IPost {
  title: string;
  body: string;
  userId: mongoose.Types.ObjectId;
  tags: string[];
}

const postSchema = new mongoose.Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
});

const postModel = mongoose.model("Posts", postSchema);
export default postModel;
