import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import {
  userExists,
  createNewUser,
  getUserByEmail,
  getUserById,
} from '../models/db/user.js';

/**
 * @description Register a new user
 * @route POST /api/auth/register
 */
export const registerUser = async (req, res, next) => {
  try {
    const { email, password, first_name, last_name, username, birthday } =
      req.body;

    if (await userExists({ email, username })) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      email,
      hashedPassword,
      first_name,
      last_name,
      username,
      birthday,
    };

    const user = await createNewUser(newUser);
    delete user.password;

    const token = jwt.sign({ userId: user.id }, process.env.SECRET, {
      expiresIn: '1h',
    });

    res
      .status(201)
      .cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      })
      .json(user);
  } catch (err) {
    next(err);
  }
};

/**
 * @description Log the user in
 * @route POST /api/auth/login
 */
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(401).json({ error: 'Incorrect email or password' });
  }

  const matches = await bcrypt.compare(password, user.password);
  if (!matches) {
    return res.status(401).json({ error: 'Incorrect email or password' });
  }

  delete user.password;

  const token = jwt.sign({ userId: user.id }, process.env.SECRET, {
    expiresIn: '1h',
  });

  res
    .status(201)
    .cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    })
    .json(user);
};

/**
 * @description Get the current logged in user
 * @route GET /api/auth/me
 */
export const getMe = async (req, res) => {
  const id = req.user.userId;
  const user = await getUserById(id);

  delete user.password;

  res.json(user);
};

/**
 * @description Log the user out
 * @route POST /api/auth/logout
 */
export const logoutUser = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });

  return res.status(200).json({ message: 'Logged out' });
};
