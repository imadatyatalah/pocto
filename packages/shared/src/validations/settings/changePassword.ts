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

// Server
export const changePasswordSchemaServer = object({
  body: changePasswordSchema,
});

export type ChangePasswordInputServer = TypeOf<
  typeof changePasswordSchemaServer
>;
