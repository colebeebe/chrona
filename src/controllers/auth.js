import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { userExists, createNewUser } from '../models/db/user.js';

/**
 * @description Log the user in
 * @route POST /api/auth/login
 */
export const registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (await userExists({ email, username })) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { ...req.body, hashedPassword };
    delete newUser.password;

    const response = await createNewUser(newUser);

    const token = jwt.sign({ userId: response.id }, process.env.SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ user: response, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Sever error' });
  }
};

/**
 * @description Log the user in
 * @route POST /api/auth/login
 */
export const loginUser = (req, res) => {
  // TODO: Handle login
  res.send('login');
};
