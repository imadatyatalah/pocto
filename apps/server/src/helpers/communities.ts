import { Prisma } from "../config/prisma";
import { postData } from "./posts";

export const createCommunity = (
  name: string,
  description: string,
  title: string,
  userId?: number
) => {
  return Prisma.validator<Prisma.CommunityCreateInput>()({
    name,
    description,
    title,
    type: "PUBLIC",
    user: { connect: { id: userId } },
  });
};

export const createPostInCommunity = (
  content: string,
  communityName: string,
  userId?: number
) => {
  return Prisma.validator<Prisma.PostCreateInput>()({
    content,
    user: { connect: { id: userId } },
    community: { connect: { name: communityName } },
  });
};

export const communityData = Prisma.validator<Prisma.CommunitySelect>()({
  name: true,
  title: true,
  description: true,
  type: true,
  posts: {
    orderBy: { createdAt: "desc" },
    select: postData,
  },
});

export const findCommunityByName = (name: string) => {
  return Prisma.validator<Prisma.CommunityWhereInput>()({
    name,
  });
};
