import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextSeo } from "next-seo";
import { styled } from "ui/stitches.config";
import { Button, Flex, Heading, Input, Label, Box } from "ui";
import { createCommunitySchema } from "shared";

import type { CreateCommunityInput } from "shared";

import { useCreateCommunity } from "@/hooks/index";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import StyledErrorMessage from "@/components/ErrorMessage/StyledErrorMessage";

import type { PoctoPage } from "@/types/PoctoPage";

const StyledForm = styled("form", {
  width: 400,
});

const Inputs = [
  { type: "text", id: "name", name: "Name" },
  { type: "text", id: "description", name: "Description" },
  { type: "text", id: "title", name: "Title" },
];

const CreateCommunity: PoctoPage = () => {
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
    <>
      <NextSeo title="Create a community" />

      <Flex direction="column" align="center" as="section">
        <Heading as="h1" css={{ float: "left", width: 400 }}>
          Create a community
        </Heading>

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
            <Button isFullWidth disabled={isLoading} type="submit">
              Create community
            </Button>
          </Box>
        </StyledForm>
      </Flex>
    </>
  );
};

CreateCommunity.authenticate = true;

export default CreateCommunity;
