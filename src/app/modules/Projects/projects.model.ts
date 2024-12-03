import { model, Schema } from "mongoose";
import { TProject } from "./projects.interface";

const projectSchema = new Schema<TProject>(
  {
    serialNumber: {
      type: Number,
      required: true,
      unique: false,
    },
    name: {
      type: String,
      required: true,
      unique: false,
    },
    title: {
      type: String,
      required: true,
      unique: false,
    },
    features: {
      type: String,
      required: true,
    },
    features2: {
      type: [String],
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    description2: {
      type: [String],
      required: false,
    },
    image: {
      type: [String],
      required: false,
    },
    live_link: {
      type: String,
      required: true,
      unique: true,
    },
    client_side_code: {
      type: String,
      required: true,
      unique: true,
    },
    server_side_code: {
      type: String,
      required: true,
      unique: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Project = model<TProject>("project", projectSchema);
