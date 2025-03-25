import {
  SERVER_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "../configs/env";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import { ApiError } from "../helpers/api-error";

export class AuthService {
  private googleClient = new OAuth2Client(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    `${SERVER_URL}/api/auth/google/callback`
  );

  async getGoogleAuthUrl(): Promise<string> {
    const scopes = [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ];

    const url = this.googleClient.generateAuthUrl({
      access_type: "offline",
      scope: scopes,
      include_granted_scopes: true,
    });

    return url;
  }

  generateToken(user: any): string {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        emailVerified: user.emailVerified,
        role: user.role,
        plan: user.plan,
        expiresAt: user.expiresAt,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );
  }

  async registerUser(name: string, email: string, password: string) {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw ApiError.BadRequest("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        role: user.role,
        plan: user.plan,
        expiresAt: user.expiresAt,
      },
      token: this.generateToken(user),
    };
  }

  async loginUser(email: string, password: string) {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) {
      throw ApiError.Unauthorized("User not found");
    }

    if (
      !existingUser.password ||
      !(await bcrypt.compare(password, existingUser?.password))
    ) {
      throw ApiError.Unauthorized("Invalid password");
    }

    return {
      user: {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        emailVerified: existingUser.emailVerified,
        role: existingUser.role,
        plan: existingUser.plan,
        expiresAt: existingUser.expiresAt,
      },
      token: this.generateToken(existingUser),
    };
  }
}
