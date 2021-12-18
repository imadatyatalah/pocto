import { object, string, TypeOf } from "zod";

export const updateProfileSchema = object({
  body: object({
    name: string().nonempty("Name is required"),
    bio: string(),
    // FIXME: website field should be aptional and a valid URL
    website: string(),
    location: string(),
  }),
});

export type UpdateProfileInput = TypeOf<typeof updateProfileSchema>;
