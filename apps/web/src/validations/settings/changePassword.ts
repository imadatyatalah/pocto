import { z } from "zod";

export const changePasswordSchema = z
  .object({
    oldPassword: z.string().nonempty("Old password is required.").min(6),
    newPassword: z.string().nonempty("New password is required.").min(6),
    confirmNewPassword: z
      .string()
      .nonempty("Confirm new password is required.")
      .min(6),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ["confirmNewPassword"],
  });
