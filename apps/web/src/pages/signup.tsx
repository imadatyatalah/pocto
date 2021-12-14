import Link from "next/link";
import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { Button, Input, Label } from "ui";

import { signupSchema } from "@/validations/index";
import { useSignUp } from "@/hooks/index";
import InputErrorMessage from "@/components/InputErrorMessage";

import type { TSignUpData } from "@/types/index";

const Inputs = [
  { type: "text", id: "name", name: "Name" },
  { type: "text", id: "username", name: "Username" },
  { type: "email", id: "email", name: "Email" },
  {
    type: "password",
    id: "password",
    name: "Password",
    placeholder: "6+ characters",
  },
];

const SignUp: NextPage = () => {
  const { mutate: signUp, isLoading } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const onSubmit = (data: TSignUpData) => signUp(data);

  return (
    <>
      <NextSeo title="Sign Up" />

      <section>
        <h1>Sign Up to Pocto</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {Inputs.map(({ id, name, type, placeholder }) => (
            <div key={id}>
              <Label css={{ display: "block", fontWeight: "600" }} htmlFor={id}>
                {name}
              </Label>

              <Input
                type={type}
                id={id}
                placeholder={placeholder}
                {...register(id)}
              />
              {errors[id] && (
                <InputErrorMessage>{errors[id].message}</InputErrorMessage>
              )}
            </div>
          ))}

          <div>
            <Input
              type="checkbox"
              id="user_agree_to_terms"
              {...register("user_agree_to_terms")}
            />
            <Label htmlFor="user_agree_to_terms">
              Creating an account means you’re okay with our Terms of Service,
              Privacy Policy, and our default Notification Settings.
            </Label>

            {errors.user_agree_to_terms && (
              <InputErrorMessage>
                {errors.user_agree_to_terms.message}
              </InputErrorMessage>
            )}
          </div>

          <div>
            <Button disabled={isLoading} type="submit">
              Create Account
            </Button>
          </div>
        </form>

        <div>
          <p>
            Already a member?{" "}
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignUp;
