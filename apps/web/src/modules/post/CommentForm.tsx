import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Input } from "ui";
import { createCommentSchema } from "shared";
import { useForm } from "react-hook-form";

import type { CreateCommentInput } from "shared";

import { useCreateComment } from "@/hooks/index";

const CommentForm = ({ postId }) => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box css={{ my: 20 }}>
        <Input
          isFullWidth
          type="text"
          id="content"
          placeholder="Write your comment"
          {...register("content")}
        />
      </Box>

      <Box css={{ my: 20 }}>
        <Button isFullWidth disabled={!isValid} type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default CommentForm;
