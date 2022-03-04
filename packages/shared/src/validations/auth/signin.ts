import { object, string, TypeOf } from "zod";

// Client
export const signinSchema = object({
  email: string().nonempty("Email is required").email(),
  password: string().nonempty("Password is required.").min(6),
});

export type SigninInput = TypeOf<typeof signinSchema>;

// API
export const signinSchemaAPI = object({ body: signinSchema });

export type SigninInputAPI = TypeOf<typeof signinSchemaAPI>;
