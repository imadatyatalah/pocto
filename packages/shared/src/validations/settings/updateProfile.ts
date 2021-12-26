import { object, string, TypeOf } from "zod";

// Client
export const updateProfileSchema = object({
  name: string().nonempty("Name is required").min(3),
  bio: string(),
  // FIXME: website field should be aptional and a valid URL
  website: string(),
  location: string(),
});

export type UpdateProfileInput = TypeOf<typeof updateProfileSchema>;

// Server
export const updateProfileSchemaServer = object({ body: updateProfileSchema });

export type UpdateProfileInputServer = TypeOf<typeof updateProfileSchemaServer>;
