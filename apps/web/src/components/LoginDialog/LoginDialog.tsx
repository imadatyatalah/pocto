import Link from "next/link";

import {
  Dialog,
  Button,
  DialogContent,
  DialogTitle,
  DialogDescription,
  Flex,
  DialogClose,
} from "@pocto/core";
import { styled } from "@pocto/core/stitches.config";
import { Cross2Icon } from "@radix-ui/react-icons";
import { CLIENT_ROUTES } from "shared/routes";
import { violet } from "@radix-ui/colors";

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

const LoginDialog = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogTitle>Like a Post to share the love.</DialogTitle>

        <DialogDescription>Join Pocto now!</DialogDescription>

        <Flex css={{ flexWrap: "wrap", gap: 10 }}>
          <DialogClose asChild>
            <Link href={CLIENT_ROUTES.SIGN_IN} passHref>
              <Button as="a" size="sm" isFullWidth>
                Log in
              </Button>
            </Link>
          </DialogClose>

          <DialogClose asChild>
            <Link href={CLIENT_ROUTES.SIGN_UP} passHref>
              <Button as="a" size="sm" variant="outline" isFullWidth>
                Sign up
              </Button>
            </Link>
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

export default LoginDialog;
