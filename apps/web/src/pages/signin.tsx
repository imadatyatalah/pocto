import Link from "next/link";
import type { NextPage } from "next";

import { styled } from "@stitches/react";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { Button, Flex, Input, Label } from "ui";

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

const StyledForm = styled("form", {
  width: 400,
});

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

      <Flex
        as="section"
        css={{ flexDirection: "column", alignItems: "center" }}
      >
        <h1 style={{ float: "left", width: 400 }}>Sign In to Pocto</h1>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {Inputs.map(({ id, name, type, additionalLink }) => (
            <div style={{ margin: "20px 0 20px 0" }} key={id}>
              <Label
                css={{ display: "block", fontWeight: "600", marginBottom: 4 }}
                htmlFor={id}
              >
                {name}

                {additionalLink && (
                  <Link href={additionalLink.path}>
                    <a style={{ fontWeight: "500", float: "right" }}>
                      {additionalLink.title}
                    </a>
                  </Link>
                )}
              </Label>

              <Input isFullWidth type={type} id={id} {...register(id)} />
              {errors[id] && (
                <InputErrorMessage>{errors[id].message}</InputErrorMessage>
              )}
            </div>
          ))}

          <div style={{ margin: "20px 0 20px 0" }}>
            <Button isFullWidth disabled={isLoading} type="submit">
              Sign In
            </Button>
          </div>
        </StyledForm>

        <div>
          <p>
            Not a member?{" "}
            <Link href="/signup">
              <a>Sign up now</a>
            </Link>
          </p>
        </div>
      </Flex>
    </>
  );
};

export default SignIn;