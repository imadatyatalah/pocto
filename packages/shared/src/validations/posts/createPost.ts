import { object, preprocess, string, TypeOf } from "zod";

import { trimString } from "../trimString";

// Client
export const createPostSchema = object({
  content: preprocess(trimString, string().nonempty("Content is required")),
});

export type CreatePostInput = TypeOf<typeof createPostSchema>;

// Server
export const createPostSchemaServer = object({ body: createPostSchema });

export type CreatePostInputServer = TypeOf<typeof createPostSchemaServer>;
