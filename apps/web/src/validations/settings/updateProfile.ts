import { object, string } from "zod";

export const updateProfileSchema = object({
  name: string().nonempty("Name is required").min(3),
  bio: string(),
  // FIXME: website field should be aptional and a valid URL
  website: string(),
  location: string(),
});
