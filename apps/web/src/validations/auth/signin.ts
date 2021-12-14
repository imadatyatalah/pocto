import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().nonempty("Email is required").email(),
  password: z.string().nonempty("Password is required.").min(6),
});
