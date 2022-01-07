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
} from "ui";

import { useDeleteAccount } from "@/hooks/index";

const AccountPageDialog = () => {
  const { mutate: deleteAccount } = useDeleteAccount();

  const handleDeleteAccount = () => deleteAccount();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="danger">Delete account</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

        <AlertDialogDescription css={{ mt: 10 }}>
          This action <strong>cannot</strong> be undone. This will permanently
          delete your all of your personal information from our database. This
          includes all of your posts, Comments, And categories.
        </AlertDialogDescription>

        <Flex justify="end">
          <AlertDialogCancel asChild>
            <Button size="sm" css={{ mr: 10 }}>
              Cancel
            </Button>
          </AlertDialogCancel>

          <AlertDialogAction>
            <Button
              size="sm"
              onClick={handleDeleteAccount}
              variant="danger"
              aria-label="Delete account"
            >
              Yes, Delete account
            </Button>
          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AccountPageDialog;
