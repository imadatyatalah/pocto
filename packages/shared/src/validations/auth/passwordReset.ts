import { object, string, TypeOf } from "zod";

export const passwordResetSchema = object({
  email: string().nonempty("Email is required").email(),
});

export const passwordResetSchemaServer = object({ body: passwordResetSchema });

export type PasswordResetInput = TypeOf<typeof passwordResetSchemaServer>;
