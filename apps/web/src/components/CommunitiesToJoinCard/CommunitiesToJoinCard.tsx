import Link from "next/link";

import { Heading, Box, Flex, Separator, Link as StyledLink } from "@pocto/core";
import { useQuery } from "react-query";
import { gray } from "@radix-ui/colors";

import type { CSS } from "@pocto/core/stitches.config";

import { getRecommendedCommunities } from "./api/getRecommendedCommunities";
import CommunityCard from "./CommunityCard";

const CommunitiesToJoinStyles: CSS = {
  border: `1px solid ${gray.gray6}`,
  rounded: 8,
};

const CommunitiesToJoinCard = () => {
  const {
    data: communities,
    isLoading,
    isError,
  } = useQuery(["current_user", "recommended_communities"], () =>
    getRecommendedCommunities()
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong happened!</div>;
  }

  return (
    <Box css={CommunitiesToJoinStyles}>
      <Flex align="center" justify="between" css={{ px: 10, py: 12 }}>
        <Heading size="xl">Communities to join</Heading>

        <div>
          <Link href="/" passHref>
            <StyledLink>See All</StyledLink>
          </Link>
        </div>
      </Flex>

      <Box css={{ px: 10 }}>
        <Separator />
      </Box>

      {communities?.map((community) => (
        <CommunityCard community={community} key={community.name} />
      ))}
    </Box>
  );
};

export default CommunitiesToJoinCard;
