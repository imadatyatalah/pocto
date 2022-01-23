import { styled } from "ui/stitches.config";
import { mauve } from "@radix-ui/colors";
import { TrashIcon } from "@radix-ui/react-icons";
import {
  Button,
  Flex,
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  DropdownMenuItem,
} from "ui";

import { useDeletePost } from "@/mutations/index";

const LeftIcon = styled("div", {
  pr: 4,
  color: mauve.mauve11,
  ":focus > &": { color: "white" },
  "[data-disabled] &": { color: mauve.mauve8 },
});

const DeletePostDialog = ({ isDeleteOpen, setIsDeleteOpen, postId }) => {
  const { mutate: deletePost } = useDeletePost(postId);

  const handleDeletePost = () => deletePost();

  return (
    <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
      <AlertDialogTrigger asChild>
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          css={{ "&:hover": { backgroundColor: "#EF4444" } }}
        >
          <LeftIcon>
            <TrashIcon />
          </LeftIcon>
          Delete Post
        </DropdownMenuItem>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogTitle>Delete Post?</AlertDialogTitle>

        <AlertDialogDescription css={{ mt: 10 }}>
          This action <strong>cannot</strong> be undone. This will permanently
          delete your post.
        </AlertDialogDescription>

        <Flex justify="end">
          <AlertDialogCancel asChild>
            <Button type="button" size="sm" variant="outline" css={{ mr: 10 }}>
              Cancel
            </Button>
          </AlertDialogCancel>

          <AlertDialogAction>
            <Button
              type="button"
              size="sm"
              variant="danger"
              aria-label="Delete account"
              onClick={handleDeletePost}
            >
              Delete
            </Button>
          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeletePostDialog;
