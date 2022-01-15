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

import { useDeletePost } from "@/mutations/index";
import useUser from "@/stores/useUser";

import type { TPost } from "@/types/index";

type Props = {
  post: TPost;
};

const LeftIcon = styled("div", {
  pr: 4,
  color: mauve.mauve11,
  ":focus > &": { color: "white" },
  "[data-disabled] &": { color: mauve.mauve8 },
});

const PostMenu = ({ post }: Props) => {
  const { mutate: deletePost } = useDeletePost(post.id);

  const currentUser = useUser((state) => state.user);

  const handleDeletePost = () => deletePost();

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

        <DropdownMenuContent sideOffset={5}>
          {post.userId === currentUser?.id ? (
            <DropdownMenuItem onClick={handleDeletePost}>
              <LeftIcon>
                <TrashIcon />
              </LeftIcon>
              Delete Post
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem>Work in progress...</DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};

export default PostMenu;
