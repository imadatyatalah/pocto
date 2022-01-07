import Link from "next/link";
import type { NextPage } from "next";

import { styled } from "ui/stitches.config";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "shared";
import { CLIENT_ROUTES } from "shared/routes";
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
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import StyledErrorMessage from "@/components/ErrorMessage/StyledErrorMessage";

const Inputs = [
  { type: "email", id: "email", name: "Email" },
  {
    type: "password",
    id: "password",
    name: "Password",
    additionalLink: {
      title: "Forgot password?",
      path: CLIENT_ROUTES.PASSWORD_RESET,
    },
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
  } = useForm<SigninInput>({ resolver: zodResolver(signinSchema) });

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
            <Box css={{ my: 20 }} key={id}>
              <Label
                css={{ display: "block", fontWeight: "600", mb: 4 }}
                htmlFor={id}
              >
                {name}

                {additionalLink && (
                  <Link href={additionalLink.path} passHref>
                    <StyledLink css={{ fontWeight: 400, float: "right" }}>
                      {additionalLink.title}
                    </StyledLink>
                  </Link>
                )}
              </Label>

              <Input
                isFullWidth
                type={type}
                id={id}
                {...register(id as keyof SigninInput)}
              />
              <ErrorMessage
                errors={errors}
                name={id}
                render={({ message }) => (
                  <StyledErrorMessage>{message}</StyledErrorMessage>
                )}
              />
            </Box>
          ))}

          <Box css={{ my: 20 }}>
            <Button isFullWidth disabled={isLoading} type="submit">
              Sign In
            </Button>
          </Box>
        </StyledForm>

        <div>
          <p>
            Not a member?{" "}
            <Link href={CLIENT_ROUTES.SIGN_UP} passHref>
              <StyledLink>Sign up now</StyledLink>
            </Link>
          </p>
        </div>
      </Flex>
    </>
  );
};

export default SignIn;
