import { model, Schema } from "mongoose";
import { TBlog } from "./blogs.interface";

const blogsSchema = new Schema<TBlog>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      unique: false,
    },
    description: {
      type: String,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

// productSchema.pre('find', function (next) {
//     this.find({ isDeleted: { $ne: true } }, { quantity: { $gt: 0 } });
//     next();
//   });

//   productSchema.pre('findOne', function (next) {
//     this.find({ isDeleted: { $ne: true } });
//     next();
//   });

export const Blog = model<TBlog>("blog", blogsSchema);
