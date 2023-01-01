import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export const createJWT = (user: User) => {
  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);

  return token;
};

export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};
