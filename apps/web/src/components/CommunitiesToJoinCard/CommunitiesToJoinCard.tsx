import Link from "next/link";

import { Heading, Box, Flex, Separator, Link as StyledLink } from "ui";
import { useQuery } from "react-query";
import { gray } from "@radix-ui/colors";

import type { CSS } from "ui/stitches.config";

import { instance } from "@/lib/axios";
import CommunityCard from "./CommunityCard";

import type { TSimpleCommunity } from "@/types/index";

const CommunitiesToJoinStyles: CSS = {
  border: `1px solid ${gray.gray6}`,
  rounded: 8,
};

const getRecommendedCommunities = async () => {
  const { data } = await instance.get<TSimpleCommunity[]>(
    "/current_user/recommended_communities"
  );

  return data;
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
    return "Loading...";
  }

  if (isError) {
    return "Something wrong happened!";
  }

  return (
    <Box css={CommunitiesToJoinStyles}>
      <Flex align="center" justify="between" css={{ px: 10, py: 12 }}>
        <Heading size="xl">Communities to join</Heading>

        <div>
          <Link href="/" passHref>
            <StyledLink css={{ fontWeight: 500 }}>See All</StyledLink>
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
