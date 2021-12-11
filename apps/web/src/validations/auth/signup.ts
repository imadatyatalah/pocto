import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  username: z.string().nonempty({ message: "Username is required" }),
  email: z.string().nonempty({ message: "Email is required" }).email(),
  password: z.string().nonempty({ message: "Password is required" }).min(6),
  user_agree_to_terms: z.literal(true, {
    invalid_type_error: "You must agree to the Terms of Service",
  }),
});
