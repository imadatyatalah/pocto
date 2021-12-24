import { object, string } from "zod";

export const passwordResetSchema = object({
  email: string().nonempty("Email is required").email(),
});
