import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Heading, Separator, Label, Input, Button } from "ui";
import { updateProfileSchema } from "shared";

import type { UpdateProfileInput } from "shared";

import { useUpdateProfile } from "@/hooks/index";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import StyledErrorMessage from "@/components/ErrorMessage/StyledErrorMessage";
import Links from "@/modules/settings/Links";
import WithAuth from "@/hocs/withAuth";

import type { TUser } from "@/types/index";

const Profile: NextPage<{ user: TUser }> = ({ user }) => {
  const { mutate: updateProfile, isLoading } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileInput>({
    resolver: zodResolver(updateProfileSchema),
  });

  const onSubmit = (data: UpdateProfileInput) => updateProfile(data);

  const Inputs = [
    { type: "text", id: "name", name: "Name", defaultValue: user.name },
    { type: "text", id: "bio", name: "Bio", defaultValue: user.profile?.bio },
    {
      type: "text",
      id: "website",
      name: "Website",
      defaultValue: user.profile?.website,
    },
    {
      type: "text",
      id: "location",
      name: "Location",
      defaultValue: user.profile?.location,
    },
  ];

  return (
    <>
      <NextSeo title="Profile settings" />

      <Box as="section" css={{ mx: 40, "@md": { display: "flex", m: 20 } }}>
        <Links />

        <Box
          as="form"
          css={{ width: "100%" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Heading>Update profile</Heading>

          <Separator css={{ m: "10px 0" }} />

          {Inputs.map(({ id, name, type, defaultValue }) => (
            <Box css={{ my: 20 }} key={id}>
              <Label
                css={{ display: "block", fontWeight: "600", mb: 4 }}
                htmlFor={id}
              >
                {name}
              </Label>

              <Input
                css={{ width: 400 }}
                defaultValue={defaultValue}
                type={type}
                id={id}
                {...register(id as keyof UpdateProfileInput)}
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
            <Button disabled={isLoading} type="submit">
              Update profile
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WithAuth(Profile);
