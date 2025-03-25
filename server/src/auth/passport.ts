import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import {
  JWT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  SERVER_URL,
} from "../configs/env";
import { prisma } from "../lib/prisma";

export const configurePassport = () => {
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: JWT_SECRET || "",
      },
      async (payload, done) => {
        try {
          const user = await prisma.user.findUnique({
            where: { id: payload.id },
          });

          if (!user) {
            return done(null, false);
          }

          return done(null, user);
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID!,
        clientSecret: GOOGLE_CLIENT_SECRET!,
        callbackURL: `${SERVER_URL}/api/auth/google/callback`,
        scope: ["profile", "email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await prisma.user.findUnique({
            where: {
              email: profile.emails?.[0]?.value,
            },
          });

          if (!user) {
            user = await prisma.user.create({
              data: {
                email: profile.emails?.[0]?.value || "",
                name: profile.displayName,
                emailVerified: profile.emails?.[0]?.verified || false,
              },
            });
          }

          return done(null, user);
        } catch (error) {
          return done(error as Error, undefined);
        }
      }
    )
  );
};
