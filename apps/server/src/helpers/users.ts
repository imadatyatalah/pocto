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

export const userData = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  name: true,
  username: true,
  email: true,
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

export const findUserById = (id: number) => {
  return Prisma.validator<Prisma.UserWhereInput>()({
    id,
  });
};
