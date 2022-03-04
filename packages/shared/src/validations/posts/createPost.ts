import { object, preprocess, string, TypeOf } from "zod";

import { trimString } from "../trimString";

// Client
export const createPostSchema = object({
  content: preprocess(trimString, string().nonempty("Content is required")),
});

export type CreatePostInput = TypeOf<typeof createPostSchema>;

// API
export const createPostSchemaAPI = object({ body: createPostSchema });

export type CreatePostInputAPI = TypeOf<typeof createPostSchemaAPI>;
