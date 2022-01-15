import { Prisma } from "../config/prisma";
import { commentData } from "./comments";

export const postData = Prisma.validator<Prisma.PostSelect>()({
  id: true,
  title: true,
  content: true,
  createdAt: true,
  userId: true,
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
});

export const createPost = (title: string, content: string, userId?: number) => {
  return Prisma.validator<Prisma.PostCreateInput>()({
    title,
    content,
    user: { connect: { id: userId } },
  });
};

export const findPostById = (id: string) => {
  return Prisma.validator<Prisma.PostWhereInput>()({
    id,
  });
};

export const updatePost = (title: string, content: string) => {
  return Prisma.validator<Prisma.PostUpdateInput>()({
    title,
    content,
  });
};
