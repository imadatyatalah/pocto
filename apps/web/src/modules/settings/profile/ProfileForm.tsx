import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Heading, Separator, Label, Input, Button } from "@pocto/core";
import { updateProfileSchema } from "shared";

import type { UpdateProfileInput } from "shared";

import { useUpdateProfile } from "@/mutations/index";
import { ProfileFormInputs as Inputs } from "./constants";
import ErrorMessageComponent from "@/components/Form/ErrorMessage";

import type { TCurrentUser } from "@/types/index";

interface Props {
  currentUser: TCurrentUser;
}

const ProfileForm = ({ currentUser }: Props) => {
  const { mutate: updateProfile, isLoading } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileInput>({
    resolver: zodResolver(updateProfileSchema),
  });

  const onSubmit = (data: UpdateProfileInput) => updateProfile(data);

  return (
    <Box as="form" css={{ width: "$full" }} onSubmit={handleSubmit(onSubmit)}>
      <Heading>Update profile</Heading>

      <Separator css={{ my: 10 }} />

      {Inputs(currentUser).map(({ id, name, type, defaultValue }) => (
        <Box css={{ my: 20 }} key={id}>
          <Label
            css={{ display: "block", fontWeight: "600", mb: 4 }}
            htmlFor={id}
          >
            {name}
          </Label>

          <Input
            css={{ width: "$full", "@xs": { width: 400 } }}
            defaultValue={defaultValue}
            type={type}
            id={id}
            {...register(id as keyof UpdateProfileInput)}
          />
          <ErrorMessageComponent errors={errors} name={id} />
        </Box>
      ))}

      <Box css={{ my: 20 }}>
        <Button disabled={isLoading} type="submit">
          Update profile
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileForm;
