import type { NextPage } from "next";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextSeo } from "next-seo";
import { styled } from "@stitches/react";
import { Button, Flex, Heading, Input, Label, Box } from "ui";
import { createCommunitySchema } from "shared";

import { useCreateCommunity } from "@/hooks/index";
import InputErrorMessage from "@/components/InputErrorMessage";
import WithAuth from "@/hocs/withAuth";

import type { TCreateCommunityData } from "@/types/index";

const StyledForm = styled("form", {
  width: 400,
});

const Inputs = [
  { type: "text", id: "name", name: "Name" },
  { type: "text", id: "description", name: "Description" },
  { type: "text", id: "title", name: "Title" },
];

const CreateCommunity: NextPage = () => {
  const { mutate: createCommunity, isLoading } = useCreateCommunity();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(createCommunitySchema) });

  const onSubmit = (data: TCreateCommunityData) => createCommunity(data);

  return (
    <>
      <NextSeo title="Create a community" />

      <Flex direction="column" align="center" as="section">
        <Heading as="h1" css={{ float: "left", width: 400 }}>
          Create a community
        </Heading>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {Inputs.map(({ id, name, type }) => (
            <Box css={{ margin: "20px 0 20px 0" }} key={id}>
              <Label
                css={{ display: "block", fontWeight: "600", marginBottom: 4 }}
                htmlFor={id}
              >
                {name}
              </Label>

              <Input isFullWidth type={type} id={id} {...register(id)} />
              {errors[id] && (
                <InputErrorMessage>{errors[id].message}</InputErrorMessage>
              )}
            </Box>
          ))}

          <Box css={{ margin: "20px 0 20px 0" }}>
            <Button isFullWidth disabled={isLoading} type="submit">
              Create community
            </Button>
          </Box>
        </StyledForm>
      </Flex>
    </>
  );
};

export default WithAuth(CreateCommunity);
