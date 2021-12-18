import { object, string } from "zod";

export const changePasswordSchema = object({
  oldPassword: string().nonempty("Old password is required.").min(6),
  newPassword: string().nonempty("New password is required.").min(6),
  confirmNewPassword: string()
    .nonempty("Confirm new password is required.")
    .min(6),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "Passwords don't match",
  path: ["confirmNewPassword"],
});
