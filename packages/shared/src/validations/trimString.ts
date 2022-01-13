export const trimString = (u: unknown) =>
  typeof u === "string" ? u.trim() : u;
