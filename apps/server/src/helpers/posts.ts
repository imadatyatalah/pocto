import { Prisma } from "../config/prisma";
import { commentData } from "./comments";

export const postData = Prisma.validator<Prisma.PostSelect>()({
  id: true,
  content: true,
  createdAt: true,
  userId: true,
  _count: { select: { comments: true } },
  user: {
    select: {
      id: true,
      name: true,
      username: true,
    },
  },
  comments: {
    orderBy: { createdAt: "desc" },
    select: commentData,
  },
  community: { select: { name: true } },
});

export const createPost = (
  content: string,
  userId?: number,
  communityName?: string
) => {
  if (communityName) {
    return Prisma.validator<Prisma.PostCreateInput>()({
      content,
      user: { connect: { id: userId } },
      community: { connect: { name: communityName } },
    });
  } else {
    return Prisma.validator<Prisma.PostCreateInput>()({
      content,
      user: { connect: { id: userId } },
    });
  }
};

export const findPostById = (id: string) => {
  return Prisma.validator<Prisma.PostWhereInput>()({
    id,
  });
};

export const updatePost = (content: string) => {
  return Prisma.validator<Prisma.PostUpdateInput>()({
    content,
  });
};
