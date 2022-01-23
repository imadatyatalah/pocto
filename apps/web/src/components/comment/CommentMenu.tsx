import {
  Box,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "ui";
import { DotsHorizontalIcon, TrashIcon } from "@radix-ui/react-icons";
import { Root as AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { styled } from "ui/stitches.config";
import { mauve } from "@radix-ui/colors";

import { useDeleteComment } from "@/mutations/index";
import useUser from "@/stores/useUser";

import type { TComment } from "@/types/index";

type Props = {
  comment: TComment;
  postId: string;
};

const LeftIcon = styled("div", {
  pr: 4,
  color: mauve.mauve11,
  ":focus > &": { color: "white" },
  "[data-disabled] &": { color: mauve.mauve8 },
});

const CommentMenu = ({ postId, comment }: Props) => {
  const { mutate: deleteComment } = useDeleteComment(postId, comment.id);

  const currentUser = useUser((state) => state.user);

  const handleDeleteComment = () => deleteComment();

  return (
    <Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>
            <AccessibleIcon label="More">
              <DotsHorizontalIcon />
            </AccessibleIcon>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5} align="end">
          {comment.user.id === currentUser?.id ? (
            <DropdownMenuItem
              css={{ "&:hover": { backgroundColor: "#EF4444" } }}
              onClick={handleDeleteComment}
            >
              <LeftIcon>
                <TrashIcon />
              </LeftIcon>
              Delete Comment
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem>Work in progress...</DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};

export default CommentMenu;
