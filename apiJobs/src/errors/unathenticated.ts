import { generateError } from "./customError";
import { StatusCodes } from "http-status-codes";


export const unauthenticated = generateError("User not authenticated",StatusCodes.UNAUTHORIZED)


