import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Heading, Separator, Label, Input, Button } from "ui";

import { updateProfileSchema } from "@/validations/index";
import { useUpdateProfile } from "@/hooks/index";
import InputErrorMessage from "@/components/InputErrorMessage";
import WithAuth from "@/hocs/withAuth";

import type { TUpdateProfileData, TUser } from "@/types/index";

const Profile: NextPage<{ user: TUser }> = ({ user }) => {
  const { mutate: updateProfile, isLoading } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(updateProfileSchema) });

  const onSubmit = (data: TUpdateProfileData) => updateProfile(data);

  const Inputs = [
    { type: "text", id: "name", name: "Name", defaultValue: user.name },
    { type: "text", id: "bio", name: "Bio", defaultValue: user.profile.bio },
    {
      type: "text",
      id: "website",
      name: "Website",
      defaultValue: user.profile.website,
    },
    {
      type: "text",
      id: "location",
      name: "Location",
      defaultValue: user.profile.location,
    },
  ];

  return (
    <>
      <NextSeo title="Profile settings" />

      <Box as="section" css={{ margin: "0 40px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading>Update profile</Heading>

          <Separator css={{ margin: "10px 0" }} />

          {Inputs.map(({ id, name, type, defaultValue }) => (
            <Box css={{ margin: "20px 0 20px 0" }} key={id}>
              <Label
                css={{ display: "block", fontWeight: "600", marginBottom: 4 }}
                htmlFor={id}
              >
                {name}
              </Label>

              <Input
                defaultValue={defaultValue}
                type={type}
                id={id}
                {...register(id)}
              />
              {errors[id] && (
                <InputErrorMessage>{errors[id].message}</InputErrorMessage>
              )}
            </Box>
          ))}

          <Box css={{ margin: "20px 0 20px 0" }}>
            <Button disabled={isLoading} type="submit">
              Update profile
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default WithAuth(Profile);
