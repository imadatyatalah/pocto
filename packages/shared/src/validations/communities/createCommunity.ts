import { object, preprocess, string, TypeOf } from "zod";

import { trimString } from "../trimString";

// Client
export const createCommunitySchema = object({
  name: preprocess(trimString, string().nonempty("Name is required")),
  description: preprocess(
    trimString,
    string().nonempty("Description is required")
  ),
  title: preprocess(trimString, string().nonempty("Title is required")),
});

export type CreateCommunityInput = TypeOf<typeof createCommunitySchema>;

// Server
export const createCommunitySchemaServer = object({
  body: createCommunitySchema,
});

export type CreateCommunityInputServer = TypeOf<
  typeof createCommunitySchemaServer
>;
