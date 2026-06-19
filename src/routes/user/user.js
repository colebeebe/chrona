import { Router } from 'express';

import { requireAuth } from '../../middleware/auth.js';
import { getUserSettings } from '../../models/db/user.js';

const router = Router();

router.get('/settings', requireAuth, async (req, res) => {
  const id = req.user.userId;
  const settings = await getUserSettings(id);
  res.json(settings);
});

export default router;
