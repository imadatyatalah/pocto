import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { changePasswordSchema } from "shared";
import { CLIENT_ROUTES } from "shared/routes";
import {
  Button,
  Input,
  Label,
  Heading,
  Separator,
  Box,
  Link as StyledLink,
} from "@pocto/core";

import type { ChangePasswordInput } from "shared";

import { useUpdatePassword } from "@/mutations/index";
import { SecurityFormInputs as Inputs } from "./constants";
import StyledErrorMessage from "@/components/ErrorMessage/StyledErrorMessage";

const SecurityForm = () => {
  const { mutate: updatePassword, isLoading } = useUpdatePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordInput>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = (data: ChangePasswordInput) => updatePassword(data);

  return (
    <Box as="form" css={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <Heading>Change password</Heading>

      <Separator css={{ my: 10 }} />

      {Inputs.map(({ id, name, type }) => (
        <Box css={{ my: 20 }} key={id}>
          <Label
            css={{ display: "block", fontWeight: "600", mb: 4 }}
            htmlFor={id}
          >
            {name}
          </Label>

          <Input
            css={{ width: "100%", "@xs": { width: 400 } }}
            type={type}
            id={id}
            {...register(id as keyof ChangePasswordInput)}
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
        <Button disabled={isLoading} type="submit" css={{ mr: 15 }}>
          Update password
        </Button>

        <Link href={CLIENT_ROUTES.PASSWORD_RESET} passHref>
          <StyledLink>I forgot my password</StyledLink>
        </Link>
      </Box>
    </Box>
  );
};

export default SecurityForm;
