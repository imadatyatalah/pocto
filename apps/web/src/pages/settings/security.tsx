import Link from "next/link";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Label, Heading, Link as StyledLink } from "ui";

import { changePasswordSchema } from "@/validations/index";
import { useUpdatePassword } from "@/hooks/index";
import InputErrorMessage from "@/components/InputErrorMessage";

import type { TChangePasswordData } from "@/types/index";

const Inputs = [
  { type: "password", id: "oldPassword", name: "Old password" },
  { type: "password", id: "newPassword", name: "New password" },
  { type: "password", id: "confirmNewPassword", name: "Confirm new password" },
];

const Security = () => {
  const { mutate: updatePassword, isLoading } = useUpdatePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(changePasswordSchema) });

  const onSubmit = (data: TChangePasswordData) => updatePassword(data);

  return (
    <>
      <NextSeo title="Account security" />

      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading>Change password</Heading>

          {Inputs.map(({ id, name, type }) => (
            <div style={{ margin: "20px 0 20px 0" }} key={id}>
              <Label
                css={{ display: "block", fontWeight: "600", marginBottom: 4 }}
                htmlFor={id}
              >
                {name}
              </Label>

              <Input type={type} id={id} {...register(id)} />
              {errors[id] && (
                <InputErrorMessage>{errors[id].message}</InputErrorMessage>
              )}
            </div>
          ))}

          <div style={{ margin: "20px 0 20px 0" }}>
            <Button disabled={isLoading} type="submit">
              Update password
            </Button>

            <Link href="/password_reset" passHref>
              <StyledLink>I forgot my password</StyledLink>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Security;
