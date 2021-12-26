import { object, string, TypeOf } from "zod";

// Client
export const passwordResetSchema = object({
  email: string().nonempty("Email is required").email(),
});

export type PasswordResetInput = TypeOf<typeof passwordResetSchema>;

// Server
export const passwordResetSchemaServer = object({ body: passwordResetSchema });

export type PasswordResetInputServer = TypeOf<typeof passwordResetSchemaServer>;
