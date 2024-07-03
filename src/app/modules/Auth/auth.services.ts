import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../User/user.model";
import { TLoginUser } from "./auth.interface";
import { createToken } from "./auth.utils";
import config from "../../config";

const loginUserInto = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await User.isUserExistsByEmail(payload.email);



    // if (!user) {
    //   throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    // }

  // if (!(await User.isPasswordMatched(payload?.password, user?.password)))
  //   throw new AppError(httpStatus.FORBIDDEN, "Password do not matched");

  // const jwtPayload = {
  //   userId: user?.id,
  //   email: user?.email,
  // };

  // const accessToken = createToken(
  //   jwtPayload,
  //   config.jwt_access_secret as string,
  //   config.jwt_access_expires_in as string
  // );

  // return accessToken;
};

export const AuthServices = {
  loginUserInto,
};
