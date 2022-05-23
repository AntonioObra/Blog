import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  book: {
    title: String,
    author: {
      firstName: String,
      lastName: String,
    },
    shopUrl: String,
  },
});

export default mongoose.model("Book", BookSchema);
