import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";
import {
  Button,
  Flex,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Cross2Icon,
} from "ui";

import { useDeleteAccount } from "@/hooks/index";

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: violet.violet4 },
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const AccountPageDialog = () => {
  const { mutate: deleteAccount } = useDeleteAccount();

  const handleDeleteAccount = () => deleteAccount();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="danger">Delete account</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action <strong>cannot</strong> be undone. This will permanently
          delete your all of your personal information from our database. This
          includes all of your posts, Comments, And categories.
        </DialogDescription>

        <Flex justify="end" css={{ marginTop: 25 }}>
          <DialogClose asChild>
            <Button
              onClick={handleDeleteAccount}
              variant="danger"
              aria-label="Delete account"
            >
              Yes, Delete account
            </Button>
          </DialogClose>
        </Flex>

        <DialogClose asChild>
          <IconButton>
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default AccountPageDialog;
