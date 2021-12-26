import { object, string, TypeOf } from "zod";

// Client
export const signinSchema = object({
  email: string().nonempty("Email is required").email(),
  password: string().nonempty("Password is required.").min(6),
});

export type SigninInput = TypeOf<typeof signinSchema>;

// Server
export const signinSchemaServer = object({ body: signinSchema });

export type SigninInputServer = TypeOf<typeof signinSchemaServer>;
