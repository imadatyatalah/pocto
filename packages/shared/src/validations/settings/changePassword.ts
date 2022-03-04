import { object, string, TypeOf } from "zod";

// Client
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

export type ChangePasswordInput = TypeOf<typeof changePasswordSchema>;

// API
export const changePasswordSchemaAPI = object({
  body: changePasswordSchema,
});

export type ChangePasswordInputAPI = TypeOf<typeof changePasswordSchemaAPI>;
