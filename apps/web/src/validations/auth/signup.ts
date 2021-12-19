import { object, string } from "zod";

export const signupSchema = object({
  name: string().nonempty({ message: "Name is required" }).min(3),
  username: string().nonempty({ message: "Username is required" }),
  email: string().nonempty({ message: "Email is required" }).email(),
  password: string().nonempty({ message: "Password is required" }).min(6),
});
