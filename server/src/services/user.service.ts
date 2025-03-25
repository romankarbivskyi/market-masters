import { User } from "@prisma/client";
import { prisma } from "../lib/prisma";

export class UserService {
  async getUserById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  }
}
