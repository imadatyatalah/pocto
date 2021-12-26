import { object, string, TypeOf } from "zod";

// Client
export const createCommunitySchema = object({
  name: string().nonempty("Name is required"),
  description: string().nonempty("Description is required"),
  title: string().nonempty("Title is required"),
});

export type CreateCommunityInput = TypeOf<typeof createCommunitySchema>;

// Server
export const createCommunitySchemaServer = object({
  body: createCommunitySchema,
});

export type CreateCommunityInputServer = TypeOf<
  typeof createCommunitySchemaServer
>;
