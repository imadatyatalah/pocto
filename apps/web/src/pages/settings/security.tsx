import Link from "next/link";
import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
} from "ui";

import type { ChangePasswordInput } from "shared";

import { useUpdatePassword } from "@/hooks/index";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import StyledErrorMessage from "@/components/ErrorMessage/StyledErrorMessage";
import WithAuth from "@/hocs/withAuth";

const Inputs = [
  { type: "password", id: "oldPassword", name: "Old password" },
  { type: "password", id: "newPassword", name: "New password" },
  { type: "password", id: "confirmNewPassword", name: "Confirm new password" },
];

const Security: NextPage = () => {
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
    <>
      <NextSeo title="Account security" />

      <Box as="section" css={{ margin: "0 40px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading>Change password</Heading>

          <Separator css={{ margin: "10px 0" }} />

          {Inputs.map(({ id, name, type }) => (
            <Box css={{ margin: "20px 0 20px 0" }} key={id}>
              <Label
                css={{ display: "block", fontWeight: "600", marginBottom: 4 }}
                htmlFor={id}
              >
                {name}
              </Label>

              <Input
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

          <Box css={{ margin: "20px 0 20px 0" }}>
            <Button disabled={isLoading} type="submit">
              Update password
            </Button>

            <Link href={CLIENT_ROUTES.PASSWORD_RESET} passHref>
              <StyledLink>I forgot my password</StyledLink>
            </Link>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default WithAuth(Security);
