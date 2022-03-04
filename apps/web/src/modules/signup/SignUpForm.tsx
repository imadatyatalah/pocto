import Link from "next/link";

import { styled } from "@pocto/core/stitches.config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { signupSchema } from "shared";
import {
  Button,
  Input,
  Label,
  Box,
  Text,
  Link as StyledLink,
} from "@pocto/core";

import type { SignupInput } from "shared";

import { useSignUp } from "@/mutations/index";
import { SignUpFormInputs as Inputs } from "./constants";
import StyledErrorMessage from "@/components/ErrorMessage/StyledErrorMessage";

const StyledForm = styled("form", {
  width: 400,
});

const SignUpForm = () => {
  const { mutate: signUp, isLoading } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>({ resolver: zodResolver(signupSchema) });

  const onSubmit = (data: SignupInput) => signUp(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {Inputs.map(({ id, name, type, placeholder }) => (
        <Box css={{ my: 20 }} key={id}>
          <Label
            css={{ display: "block", fontWeight: "600", mb: 4 }}
            htmlFor={id}
          >
            {name}
          </Label>

          <Input
            isFullWidth
            type={type}
            id={id}
            placeholder={placeholder}
            {...register(id as keyof SignupInput)}
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

      <Box css={{ my: 20 }}>
        <Button isFullWidth disabled={isLoading} type="submit">
          Create Account
        </Button>
      </Box>
    </StyledForm>
  );
};

export default SignUpForm;
