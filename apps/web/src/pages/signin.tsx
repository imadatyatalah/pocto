import Link from "next/link";
import type { NextPage } from "next";

import { styled } from "@stitches/react";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "shared";
import {
  Button,
  Flex,
  Heading,
  Input,
  Label,
  Box,
  Link as StyledLink,
} from "ui";

import type { SigninInput } from "shared";

import { useSignIn } from "@/hooks/index";
import InputErrorMessage from "@/components/InputErrorMessage";

const Inputs = [
  { type: "email", id: "email", name: "Email" },
  {
    type: "password",
    id: "password",
    name: "Password",
    additionalLink: { title: "Forgot password?", path: "/password_reset" },
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

  const onSubmit = (data: SigninInput) => signIn(data);

  return (
    <>
      <NextSeo title="Sign In" />

      <Flex direction="column" align="center" as="section">
        <Heading as="h1" css={{ float: "left", width: 400 }}>
          Sign In to Pocto
        </Heading>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {Inputs.map(({ id, name, type, additionalLink }) => (
            <Box css={{ margin: "20px 0 20px 0" }} key={id}>
              <Label
                css={{ display: "block", fontWeight: "600", marginBottom: 4 }}
                htmlFor={id}
              >
                {name}

                {additionalLink && (
                  <Link href={additionalLink.path} passHref>
                    <StyledLink css={{ fontWeight: "500", float: "right" }}>
                      {additionalLink.title}
                    </StyledLink>
                  </Link>
                )}
              </Label>

              <Input isFullWidth type={type} id={id} {...register(id)} />
              {errors[id] && (
                <InputErrorMessage>{errors[id].message}</InputErrorMessage>
              )}
            </Box>
          ))}

          <Box css={{ margin: "20px 0 20px 0" }}>
            <Button isFullWidth disabled={isLoading} type="submit">
              Sign In
            </Button>
          </Box>
        </StyledForm>

        <div>
          <p>
            Not a member?{" "}
            <Link href="/signup" passHref>
              <StyledLink>Sign up now</StyledLink>
            </Link>
          </p>
        </div>
      </Flex>
    </>
  );
};

export default SignIn;
