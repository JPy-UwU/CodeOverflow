import express from 'express';

import { getUser, deleteUser, getAllUsers } from '../controllers/user.js';

const router = express.Router();

router.get("/find/:userId", getUser)
router.put("/delete/:userId", deleteUser)
router.get("/all", getAllUsers);

export default router;