import { Prisma } from "../config/prisma";

export const postData = Prisma.validator<Prisma.PostSelect>()({
  title: true,
  content: true,
  userId: true,
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
