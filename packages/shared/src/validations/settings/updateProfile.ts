import { object, preprocess, string, TypeOf } from "zod";

import { trimString } from "../trimString";

// Client
export const updateProfileSchema = object({
  name: preprocess(trimString, string().nonempty("Name is required").min(3)),
  bio: preprocess(trimString, string()),
  // FIXME: website field should be aptional and a valid URL
  website: preprocess(trimString, string()),
  location: preprocess(trimString, string()),
});

export type UpdateProfileInput = TypeOf<typeof updateProfileSchema>;

// Server
export const updateProfileSchemaServer = object({ body: updateProfileSchema });

export type UpdateProfileInputServer = TypeOf<typeof updateProfileSchemaServer>;
