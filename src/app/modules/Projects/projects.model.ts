import { model, Schema } from "mongoose";
import { TProject } from "./projects.interface";

const projectSchema = new Schema<TProject>(
  {
    porject_name: {
      type: String,
      required: true,
      unique: false,
    },
    porject_title: {
      type: String,
      required: true,
      unique: false,
    },
    porject_detail_1: {
      type: String,
      required: true,
      unique: false,
    },
    porject_detail_2: {
      type: String,
      required: true,
      unique: false,
    },
    porject_detail_3: {
      type: String,
      required: true,
      unique: false,
    },
    porject_detail_4: {
      type: String,
      required: true,
      unique: false,
    },
    porject_img1: {
      type: String,
      required: true,
      unique: false,
    },
    porject_img2: {
      type: String,
      required: true,
      unique: false,
    },
    porject_img3: {
      type: String,
      required: true,
      unique: false,
    },
    porject_live_link: {
      type: String,
      required: true,
      unique: true,
    },
    porject_client_side: {
      type: String,
      required: true,
      unique: true,
    },
    porject_server_side: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Project = model<TProject>("project", projectSchema);
