import { object, string, TypeOf } from "zod";

export const signinSchema = object({
  email: string().nonempty("Email is required").email(),
  password: string().nonempty("Password is required.").min(6),
});

export const signinSchemaServer = object({ body: signinSchema });

export type SigninInput = TypeOf<typeof signinSchemaServer>;
