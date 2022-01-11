import { object, preprocess, string, TypeOf } from "zod";

import { trimString } from "../trimString";

// Client
export const signupSchema = object({
  name: preprocess(
    trimString,
    string().nonempty({ message: "Name is required" }).min(3)
  ),
  username: preprocess(
    trimString,
    string().nonempty({ message: "Username is required" })
  ),
  email: string().nonempty({ message: "Email is required" }).email(),
  password: string().nonempty({ message: "Password is required" }).min(6),
});

export type SignupInput = TypeOf<typeof signupSchema>;

// Server
export const signupSchemaServer = object({ body: signupSchema });

export type SignupInputServer = TypeOf<typeof signupSchemaServer>;
