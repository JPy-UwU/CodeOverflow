import express from 'express';

import { getUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.get("/find/:userId", getUser)
router.put("/delete/:userId", deleteUser)

export default router;