import { object, string } from "zod";

export const signinSchema = object({
  email: string().nonempty("Email is required").email(),
  password: string().nonempty("Password is required.").min(6),
});
