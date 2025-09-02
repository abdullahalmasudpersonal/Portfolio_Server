import { model, Schema } from "mongoose";
import { BlogModel, TBlog } from "./blogs.interface";

const blogsSchema = new Schema<TBlog>(
  {
    serialNumber: {
      type: Number,
      required: true,
      unique: false,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
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

blogsSchema.statics.isBlogExistsById = async function (_id: string) {
  return await Blog.findById({ _id });
};

// productSchema.pre('find', function (next) {
//     this.find({ isDeleted: { $ne: true } }, { quantity: { $gt: 0 } });
//     next();
//   });

//   productSchema.pre('findOne', function (next) {
//     this.find({ isDeleted: { $ne: true } });
//     next();
//   });

export const Blog = model<TBlog, BlogModel>("Blog", blogsSchema);
