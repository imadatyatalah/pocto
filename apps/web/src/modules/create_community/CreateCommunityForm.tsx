import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "@pocto/core/stitches.config";
import { Button, Input, Label, Box } from "@pocto/core";
import { createCommunitySchema } from "shared";

import type { CreateCommunityInput } from "shared";

import { useCreateCommunity } from "@/mutations/index";
import { CreateCommunityFormInputs as Inputs } from "./constants";
import ErrorMessageComponent from "@/components/Form/ErrorMessage";

const StyledForm = styled("form", {
  width: 400,
});

const CreateCommunityForm = () => {
  const { mutate: createCommunity, isLoading } = useCreateCommunity();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCommunityInput>({
    resolver: zodResolver(createCommunitySchema),
  });

  const onSubmit = (data: CreateCommunityInput) => createCommunity(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {Inputs.map(({ id, name, type }) => (
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
            {...register(id as keyof CreateCommunityInput)}
          />
          <ErrorMessageComponent errors={errors} name={id} />
        </Box>
      ))}

      <Box css={{ my: 20 }}>
        <Button isFullWidth disabled={isLoading} type="submit">
          Create community
        </Button>
      </Box>
    </StyledForm>
  );
};

export default CreateCommunityForm;
