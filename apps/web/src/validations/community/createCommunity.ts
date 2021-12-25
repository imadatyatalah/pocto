import { object, string } from "zod";

export const createCommunitySchema = object({
  name: string().nonempty("Name is required"),
  description: string().nonempty("Description is required"),
  title: string().nonempty("Title is required"),
});
