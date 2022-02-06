import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Input, Flex } from "ui";
import { createCommentSchema } from "shared";
import { useForm } from "react-hook-form";

import type { CreateCommentInput } from "shared";

import { useCreateComment } from "@/mutations/index";

interface Props {
  postId: string;
}

const CommentForm = ({ postId }: Props) => {
  const { mutate: createComment, isLoading } = useCreateComment(postId);

  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreateCommentInput>({
    resolver: zodResolver(createCommentSchema),
    mode: "onChange",
  });

  const onSubmit = (data: CreateCommentInput) => {
    createComment(data);
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
          placeholder="Write your comment"
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

export default CommentForm;
