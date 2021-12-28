import { object, string, TypeOf } from "zod";

// Client
export const createPostSchema = object({
  title: string().nonempty("Title is required"),
  content: string().nonempty("Content is required"),
});

export type CreatePostInput = TypeOf<typeof createPostSchema>;

// Server
export const createPostSchemaServer = object({ body: createPostSchema });

export type CreatePostInputServer = TypeOf<typeof createPostSchemaServer>;
