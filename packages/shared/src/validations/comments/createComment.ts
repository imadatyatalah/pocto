import { object, string, TypeOf } from "zod";

// Client
export const createCommentSchema = object({
  content: string().nonempty("Content is required"),
});

export type CreateCommentInput = TypeOf<typeof createCommentSchema>;

// Server
export const createCommentSchemaServer = object({ body: createCommentSchema });

export type CreateCommentInputServer = TypeOf<typeof createCommentSchemaServer>;
