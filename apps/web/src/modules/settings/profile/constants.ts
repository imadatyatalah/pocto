import type { TCurrentUser } from "@/types/index";

export const ProfileFormInputs = (currentUser: TCurrentUser) => [
  { type: "text", id: "name", name: "Name", defaultValue: currentUser.name },
  {
    type: "text",
    id: "bio",
    name: "Bio",
    defaultValue: currentUser.profile.bio,
  },
  {
    type: "text",
    id: "website",
    name: "Website",
    defaultValue: currentUser.profile.website,
  },
  {
    type: "text",
    id: "location",
    name: "Location",
    defaultValue: currentUser.profile.location,
  },
];
