import Link from "next/link";
import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { Button, Input, Label } from "ui";

import { signinSchema } from "@/validations/index";
import { useSignIn } from "@/hooks/index";
import InputErrorMessage from "@/components/InputErrorMessage";

import type { TSignInData } from "@/types/index";

const Inputs = [
  { type: "email", id: "email", name: "Email" },
  {
    type: "password",
    id: "password",
    name: "Password",
    additionalLink: { title: "Forgot password?", path: "/" },
  },
];

const SignIn: NextPage = () => {
  const { mutate: signIn, isLoading } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signinSchema) });

  const onSubmit = (data: TSignInData) => signIn(data);

  return (
    <>
      <NextSeo title="Sign In" />

      <section>
        <h1>Sign In to Pocto</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {Inputs.map(({ id, name, type, additionalLink }) => (
            <div key={id}>
              <Label css={{ display: "block", fontWeight: "600" }} htmlFor={id}>
                {name}

                {additionalLink && (
                  <Link href={additionalLink.path}>
                    <a style={{ fontWeight: "500" }}>{additionalLink.title}</a>
                  </Link>
                )}
              </Label>

              <Input type={type} id={id} {...register(id)} />
              {errors[id] && (
                <InputErrorMessage>{errors[id].message}</InputErrorMessage>
              )}
            </div>
          ))}

          <div>
            <Button disabled={isLoading} type="submit">
              Sign In
            </Button>
          </div>
        </form>

        <div>
          <p>
            Not a member?{" "}
            <Link href="/signup">
              <a>Sign up now</a>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignIn;
