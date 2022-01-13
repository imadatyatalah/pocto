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
    profile: { create: {} },
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
      update: { bio, website, location },
    },
  });
};

export const currentUserData = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  name: true,
  username: true,
  profile: {
    select: { bio: true, website: true, location: true, avatarUrl: true },
  },
});

export const userData = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  name: true,
  username: true,
  posts: {
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      content: true,
      userId: true,
      createdAt: true,
      user: {
        select: {
          id: true,
          name: true,
          username: true,
        },
      },
    },
  },
  profile: {
    select: { bio: true, website: true, location: true, avatarUrl: true },
  },
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
