import { object, string, TypeOf } from "zod";

// Client
export const signupSchema = object({
  name: string().nonempty({ message: "Name is required" }).min(3),
  username: string().nonempty({ message: "Username is required" }),
  email: string().nonempty({ message: "Email is required" }).email(),
  password: string().nonempty({ message: "Password is required" }).min(6),
});

export type SignupInput = TypeOf<typeof signupSchema>;

// Server
export const signupSchemaServer = object({ body: signupSchema });

export type SignupInputServer = TypeOf<typeof signupSchemaServer>;
