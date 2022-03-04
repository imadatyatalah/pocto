declare namespace Express {
  export interface Request {
    user?: { id: number; role: "USER" | "ADMIN"; iat: number; exp: number };
  }
}
