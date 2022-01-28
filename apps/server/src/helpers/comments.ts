import { Prisma } from "../config/prisma";

export const commentData = Prisma.validator<Prisma.CommentSelect>()({
  id: true,
  content: true,
  createdAt: true,
  postId: true,
  likes: { select: { userId: true } },
  _count: { select: { likes: true } },
  user: {
    select: {
      id: true,
      name: true,
      username: true,
    },
  },
});
