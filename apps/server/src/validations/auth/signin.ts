import { object, string, TypeOf } from "zod";

export const signinSchema = object({
  body: object({
    email: string().nonempty("Email is required").email(),
    password: string().nonempty("Password is required.").min(6),
  }),
});

export type SigninInput = TypeOf<typeof signinSchema>;
