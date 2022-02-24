import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Input, Flex } from "@pocto/core";
import { createPostSchema } from "shared";
import { useForm } from "react-hook-form";

import type { CreatePostInput } from "shared";

import { useCreatePost } from "@/mutations/index";

interface Props {
  communityName?: string;
}

const PostForm = ({ communityName }: Props) => {
  const { mutate: createPost, isLoading } = useCreatePost(communityName);

  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreatePostInput>({
    resolver: zodResolver(createPostSchema),
    mode: "onChange",
  });

  const onSubmit = (data: CreatePostInput) => {
    createPost(data);
    reset();
  };

  return (
    <Flex
      align="center"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      css={{ mt: 20 }}
    >
      <Box css={{ width: "100%" }}>
        <Input
          css={{ height: 38 }}
          isFullWidth
          type="text"
          id="content"
          placeholder="Write your post"
          {...register("content")}
        />
      </Box>

      <Box>
        <Button
          size="sm"
          disabled={!isValid || isLoading}
          type="submit"
          css={{ ml: 10 }}
        >
          Submit
        </Button>
      </Box>
    </Flex>
  );
};

export default PostForm;
