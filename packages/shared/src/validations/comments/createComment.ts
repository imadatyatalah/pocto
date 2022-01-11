import { object, preprocess, string, TypeOf } from "zod";

import { trimString } from "../trimString";

// Client
export const createCommentSchema = object({
  content: preprocess(trimString, string().nonempty("Content is required")),
});

export type CreateCommentInput = TypeOf<typeof createCommentSchema>;

// Server
export const createCommentSchemaServer = object({ body: createCommentSchema });

export type CreateCommentInputServer = TypeOf<typeof createCommentSchemaServer>;
