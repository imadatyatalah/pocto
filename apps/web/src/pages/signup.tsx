import Link from "next/link";
import type { NextPage } from "next";

import { styled } from "@stitches/react";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "shared";
import {
  Button,
  Flex,
  Input,
  Label,
  Heading,
  Box,
  Text,
  Link as StyledLink,
} from "ui";

import type { SignupInput } from "shared";

import { useSignUp } from "@/hooks/index";
import InputErrorMessage from "@/components/InputErrorMessage";

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

const StyledForm = styled("form", {
  width: 400,
});

const SignUp: NextPage = () => {
  const { mutate: signUp, isLoading } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const onSubmit = (data: SignupInput) => signUp(data);

  return (
    <>
      <NextSeo title="Sign Up" />

      <Flex as="section" direction="column" align="center">
        <Heading as="h1" css={{ float: "left", width: 400 }}>
          Sign Up to Pocto
        </Heading>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {Inputs.map(({ id, name, type, placeholder }) => (
            <Box css={{ margin: "20px 0 20px 0" }} key={id}>
              <Label
                css={{ display: "block", fontWeight: "600", marginBottom: 4 }}
                htmlFor={id}
              >
                {name}
              </Label>

              <Input
                isFullWidth
                type={type}
                id={id}
                placeholder={placeholder}
                {...register(id)}
              />
              {errors[id] && (
                <InputErrorMessage>{errors[id].message}</InputErrorMessage>
              )}
            </Box>
          ))}

          <div>
            <Text css={{ fontSize: 14 }}>
              By clicking Create Account, You agree to our{" "}
              <Link href="/" passHref>
                <StyledLink>Terms of Service</StyledLink>
              </Link>{" "}
              and{" "}
              <Link href="/" passHref>
                <StyledLink>Privacy Policy</StyledLink>
              </Link>
              .
            </Text>
          </div>

          <Box css={{ margin: "20px 0 20px 0" }}>
            <Button isFullWidth disabled={isLoading} type="submit">
              Create Account
            </Button>
          </Box>
        </StyledForm>

        <div>
          <p>
            Already a member?{" "}
            <Link href="/signin" passHref>
              <StyledLink>Sign In</StyledLink>
            </Link>
          </p>
        </div>
      </Flex>
    </>
  );
};

export default SignUp;
