import { NextSeo } from "next-seo";
import {
  Button,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Separator,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Cross2Icon,
} from "ui";

import { useDeleteAccount } from "@/hooks/index";
import WithAuth from "@/hocs/withAuth";

const Account = () => {
  const { mutate } = useDeleteAccount();

  const handleDeleteAccount = () => mutate();

  return (
    <>
      <NextSeo title="Account settings" />

      <Box as="section" css={{ margin: "0 20px" }}>
        <div>
          <Heading css={{ color: "#EF4444" }}>Delete account</Heading>

          <Separator orientation="horizontal" css={{ margin: "10px 0" }} />

          <Text css={{ margin: "10px 0" }}>
            Once you delete your account, there is no going back. Please be
            certain.
          </Text>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="danger">Delete account</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action <strong>cannot</strong> be undone. This will
              permanently delete your all of your personal information from our
              database. This includes all of your posts, Comments, And
              categories.
            </DialogDescription>

            <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
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
      </Box>
    </>
  );
};

export default WithAuth(Account);
