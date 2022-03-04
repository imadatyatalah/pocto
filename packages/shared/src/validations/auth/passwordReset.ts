import { object, string, TypeOf } from "zod";

// Client
export const passwordResetSchema = object({
  email: string().nonempty("Email is required").email(),
});

export type PasswordResetInput = TypeOf<typeof passwordResetSchema>;

// API
export const passwordResetSchemaAPI = object({ body: passwordResetSchema });

export type PasswordResetInputAPI = TypeOf<typeof passwordResetSchemaAPI>;
