import type { NextPage } from "next";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { styled } from "@pocto/core/stitches.config";
import { NextSeo } from "next-seo";
import { Heading, Flex, Box, Label, Input, Button } from "@pocto/core";
import { passwordResetSchema } from "shared";

import type { PasswordResetInput } from "shared";

import ErrorMessageComponent from "@/components/Form/ErrorMessage";

const StyledForm = styled("form", {
  width: 400,
});

const PasswordReset: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordResetInput>({
    resolver: zodResolver(passwordResetSchema),
  });

  const onSubmit = (data: PasswordResetInput) => console.log(data);

  return (
    <>
      <NextSeo title="Reset your password" />

      <Flex direction="column" align="center" as="section">
        <Box css={{ float: "left", width: 400 }}>
          <Heading css={{ mb: 10 }}>Forgot Password?</Heading>

          <p>
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
          </p>
        </Box>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Box css={{ my: 20 }}>
            <Label
              css={{ display: "block", fontWeight: "600", mb: 4 }}
              htmlFor="email"
            >
              Email
            </Label>

            <Input isFullWidth type="email" id="email" {...register("email")} />

            <ErrorMessageComponent errors={errors} name="email" />
          </Box>

          <Box css={{ my: 20 }}>
            <Button isFullWidth type="submit">
              Submit
            </Button>
          </Box>
        </StyledForm>
      </Flex>
    </>
  );
};

export default PasswordReset;
