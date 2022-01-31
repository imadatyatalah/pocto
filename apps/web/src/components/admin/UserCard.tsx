// @TODO: Delete this file when Admin app is ready

import { Heading, Flex, Button } from "ui";

import { useBanUser } from "@/mutations/admin";

const UserCard = ({ user }) => {
  const { name, username, isBanned } = user;

  const { mutate: banUser } = useBanUser(username);

  const handleBanUser = () => banUser();

  return (
    <Flex justify="between" align="center">
      <div>
        <Heading>{name}</Heading>
        <p>{username}</p>
      </div>

      <Button
        size="sm"
        variant="danger"
        onClick={handleBanUser}
        disabled={isBanned}
      >
        {isBanned ? "Banned" : "Ban user"}
      </Button>
    </Flex>
  );
};

export default UserCard;
