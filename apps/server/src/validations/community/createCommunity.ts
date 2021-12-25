import { object, string, TypeOf } from "zod";

export const createCommunitySchema = object({
  body: object({
    name: string().nonempty("Name is required"),
    description: string().nonempty("Description is required"),
    title: string().nonempty("Title is required"),
  }),
});

export type CreateCommunityInput = TypeOf<typeof createCommunitySchema>;
