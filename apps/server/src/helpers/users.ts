import { Prisma } from "../config/prisma";

export const createUser = (
  email: string,
  password: string,
  name: string,
  username: string
) => {
  return Prisma.validator<Prisma.UserCreateInput>()({
    email,
    password,
    name,
    username,
  });
};

export const updateUser = (
  name: string,
  bio: string,
  website: string,
  location: string
) => {
  return Prisma.validator<Prisma.UserUpdateInput>()({
    name,
    profile: {
      upsert: {
        create: { bio, website, location },
        update: { bio, website, location },
      },
    },
  });
};

export const userData = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  name: true,
  username: true,
  email: true,
  profile: { select: { bio: true, website: true, location: true } },
});

export const findUserByUsername = (username: string) => {
  return Prisma.validator<Prisma.UserWhereInput>()({
    username,
  });
};

export const findUserByEmail = (email: string) => {
  return Prisma.validator<Prisma.UserWhereInput>()({
    email,
  });
};

export const findUserById = (id?: number) => {
  return Prisma.validator<Prisma.UserWhereInput>()({
    id,
  });
};
