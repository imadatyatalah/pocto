import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { styled } from "@stitches/react";
import { useForm } from "react-hook-form";
import { Button, Flex, Heading, Input, Label, Box } from "ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPostSchema } from "shared";
import { useCreatePost } from "@/hooks/index";

import type { CreatePostInput } from "shared";

import InputErrorMessage from "@/components/InputErrorMessage";

const StyledForm = styled("form", {
  width: 400,
});

const Inputs = [
  { type: "text", id: "title", name: "Title" },
  { type: "text", id: "content", name: "Content" },
];

const CreatePost: NextPage = () => {
  const { mutate: createPost, isLoading } = useCreatePost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostInput>({ resolver: zodResolver(createPostSchema) });

  const onSubmit = (data: CreatePostInput) => createPost(data);

  return (
    <>
      <NextSeo title="Create a post" />

      <Flex direction="column" align="center" as="section">
        <Heading as="h1" css={{ float: "left", width: 400 }}>
          Create a post
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

              <Input
                isFullWidth
                type={type}
                id={id}
                {...register(id as keyof CreatePostInput)}
              />
              {errors[id] && (
                <InputErrorMessage>{errors[id].message}</InputErrorMessage>
              )}
            </Box>
          ))}

          <Box css={{ margin: "20px 0 20px 0" }}>
            <Button isFullWidth disabled={isLoading} type="submit">
              Create post
            </Button>
          </Box>
        </StyledForm>
      </Flex>
    </>
  );
};

export default CreatePost;
