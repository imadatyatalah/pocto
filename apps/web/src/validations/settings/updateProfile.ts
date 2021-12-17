import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().nonempty("Name is required"),
  bio: z.string(),
  // FIXME: website field should be aptional and a valid URL
  website: z.string(),
  location: z.string(),
});
