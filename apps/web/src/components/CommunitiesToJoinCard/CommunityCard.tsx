import { useRouter } from "next/router";
import Link from "next/link";

import { Box, Flex, Heading, Text } from "@pocto/core";
import { CLIENT_ROUTES } from "shared/routes";
import { gray } from "@radix-ui/colors";

import Avatar from "../Avatar";

import type { TSimpleCommunity } from "@/types/community";

interface Props {
  community: TSimpleCommunity;
}

const CommunityCard = ({ community }: Props) => {
  const router = useRouter();

  const { title, name } = community;

  // LINKS
  const communityLink = CLIENT_ROUTES.COMMUNITY_PAGE(name);

  return (
    <Flex
      role="button"
      onClick={() => router.push(communityLink)}
      css={{
        px: 10,
        py: 14,

        "&:hover": {
          backgroundColor: gray.gray3,
        },
      }}
      key={name}
    >
      <Box
        css={{ size: 47.5, background: "$primary1", rounded: "100%", mr: 10 }}
      >
        <Link href={communityLink}>
          <a>
            <Avatar />
          </a>
        </Link>
      </Box>

      <Link href={communityLink}>
        <a>
          <div>
            <div>
              <Heading as="h3" size="base">
                {title}
              </Heading>
            </div>

            <div>
              <Text
                as="span"
                css={{
                  color: "DimGray",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                @{name}
              </Text>
            </div>
          </div>
        </a>
      </Link>
    </Flex>
  );
};

export default CommunityCard;
