import crypto from "crypto";
import prisma from "@/lib/prisma-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { email, password } = req.body;

  const SALT = crypto.randomBytes(16).toString("hex");

  const hashed_password = await crypto
    .scryptSync(password, SALT, 32)
    .toString("hex");

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashed_password,
      },
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}
