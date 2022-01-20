import { useState } from "react";

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
import DeletePostDialog from "./DeletePostDialog";
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
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const currentUser = useUser((state) => state.user);

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

        <DropdownMenuContent hidden={isDeleteOpen} sideOffset={5} align="end">
          {post.userId === currentUser?.id ? (
            <DeletePostDialog
              isDeleteOpen={isDeleteOpen}
              setIsDeleteOpen={setIsDeleteOpen}
              postId={post.id}
            />
          ) : (
            <DropdownMenuItem>Work in progress...</DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};

export default PostMenu;
