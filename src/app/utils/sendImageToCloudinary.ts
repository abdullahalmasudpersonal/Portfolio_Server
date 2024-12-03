/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import fs from "fs";
import multer from "multer";
import config from "../config";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: config.cloudinary_cloud_name,
  api_key: config.cloudinary_api_key,
  api_secret: config.cloudinary_api_secret,
});


export const sendImageToCloudinary = (
  imageName: string,
  path: string
): Promise<Record<string, unknown>> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      { public_id: imageName.trim() },
      function (error, result) {
        if (error) {
          reject(error);
        }
        resolve(result as UploadApiResponse);
        // delete a file asynchronously
        fs.unlink(path, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("File is deleted.");
          }
        });
      }
    );
  });
};


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, process.cwd() + "/uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    // @ts-expect-error
    folder: 'uploads', // Cloudinary এর ফোল্ডার
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    format: async (req: any, file: any) => 'png', // ফাইল ফরম্যাট সেট করো
    public_id: (req, file) => file.originalname.split('.')[0],
    // folder: 'uploads', // Cloudinary-তে ফোল্ডারের নাম
    // allowed_formats: ['jpeg', 'png', 'jpg', 'webp'], // ফরম্যাট সীমাবদ্ধতা
  },
});

const upload = multer({ storage: storage });

export const FileUploadHelper = {
  upload,
};