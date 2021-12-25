import { object, string, TypeOf } from "zod";

export const updateProfileSchema = object({
  name: string().nonempty("Name is required").min(3),
  bio: string(),
  // FIXME: website field should be aptional and a valid URL
  website: string(),
  location: string(),
});

export const updateProfileSchemaServer = object({ body: updateProfileSchema });

export type UpdateProfileInput = TypeOf<typeof updateProfileSchemaServer>;
