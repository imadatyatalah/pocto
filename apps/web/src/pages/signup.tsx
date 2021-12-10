import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { Button, Input } from "ui";

import { signupSchema } from "@/validations/index";
import { useSignUp } from "@/hooks/index";

import type { SignUpData } from "@/types/auth/signUp";

const Inputs = [
  { type: "text", id: "name", placeholder: "Name" },
  { type: "text", id: "username", placeholder: "Username" },
  { type: "email", id: "email", placeholder: "Email" },
  { type: "password", id: "password", placeholder: "Password" },
];

const SignUp: NextPage = () => {
  const { mutate: signUp, isLoading } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const onSubmit = (data: SignUpData) => signUp(data);

  return (
    <>
      <NextSeo title="Sign Up" />

      <section>
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {Inputs.map(({ id, placeholder, type }) => (
            <div key={id}>
              <Input
                type={type}
                id={id}
                placeholder={placeholder}
                {...register(id)}
              />
              {errors[id] && <p>{errors[id].message}</p>}
            </div>
          ))}

          <div>
            <Button disabled={isLoading} type="submit">
              Sign Up
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignUp;
