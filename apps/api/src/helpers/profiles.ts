import { Prisma } from "../config/prisma";

export const findProfileByUserId = (userId?: number) => {
  return Prisma.validator<Prisma.ProfileWhereInput>()({
    userId,
  });
};
