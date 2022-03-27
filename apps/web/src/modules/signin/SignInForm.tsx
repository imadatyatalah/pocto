import Link from "next/link";

import { styled } from "@pocto/core/stitches.config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "shared";
import { Button, Input, Label, Box, Link as StyledLink } from "@pocto/core";

import type { SigninInput } from "shared";

import { useSignIn } from "@/mutations/index";
import { SignInFormInputs as Inputs } from "./constants";
import ErrorMessageComponent from "@/components/Form/ErrorMessage";

const StyledForm = styled("form", {
  width: 400,
});

const SignInForm = () => {
  const { mutate: signIn, isLoading } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninInput>({ resolver: zodResolver(signinSchema) });

  const onSubmit = (data: SigninInput) => signIn(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {Inputs.map(({ id, name, type, additionalLink }) => (
        <Box css={{ my: 20 }} key={id}>
          <Label
            css={{ display: "block", fontWeight: "600", mb: 4 }}
            htmlFor={id}
          >
            {name}

            {additionalLink ? (
              <Link href={additionalLink.path} passHref>
                <StyledLink css={{ fontWeight: 400, float: "right" }}>
                  {additionalLink.title}
                </StyledLink>
              </Link>
            ) : null}
          </Label>

          <Input
            isFullWidth
            type={type}
            id={id}
            {...register(id as keyof SigninInput)}
          />
          <ErrorMessageComponent errors={errors} name={id} />
        </Box>
      ))}

      <Box css={{ my: 20 }}>
        <Button isFullWidth disabled={isLoading} type="submit">
          Sign In
        </Button>
      </Box>
    </StyledForm>
  );
};

export default SignInForm;
