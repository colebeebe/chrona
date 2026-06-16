import { Router } from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/auth.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);

router.get('/me', requireAuth, (req, res) => {
  res.json({ userId: req.user.userId });
});

export default router;
