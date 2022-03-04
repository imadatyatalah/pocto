import { object, preprocess, string, TypeOf } from "zod";

import { trimString } from "../trimString";

// Client
export const createCommentSchema = object({
  content: preprocess(trimString, string().nonempty("Content is required")),
});

export type CreateCommentInput = TypeOf<typeof createCommentSchema>;

// API
export const createCommentSchemaAPI = object({ body: createCommentSchema });

export type CreateCommentInputAPI = TypeOf<typeof createCommentSchemaAPI>;
