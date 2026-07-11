import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authentication(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.headers.authorization;
  if (!token) return res.json({ message: "you are not authenticated!" });
  try {
    const payload = jwt.verify(token!, "jsjsjjsjsjsj");
    (req as any).user = payload;
  } catch (error) {
    return res.send((error as any).message);
  }
  next();
}
