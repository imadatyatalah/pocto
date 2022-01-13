import {
  Box,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "ui";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { useDeletePost } from "@/hooks/index";
import useUser from "@/stores/useUser";

const PostMenu = ({ post }) => {
  const { mutate: deletePost } = useDeletePost(post.id);

  const currentUser = useUser((state) => state.user);

  const handleDeletePost = () => deletePost();

  return (
    <Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>
            <DotsHorizontalIcon />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5}>
          {post.userId === currentUser?.id ? (
            <DropdownMenuItem onClick={handleDeletePost}>
              Delete Post
            </DropdownMenuItem>
          ) : null}
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};

export default PostMenu;
