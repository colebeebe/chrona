import { Router } from 'express';

import authRouter from './auth.js';
import userRouter from './user/user.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Primary API endpoint');
});

router.use('/auth', authRouter);

router.use('/user', userRouter);

export default router;
