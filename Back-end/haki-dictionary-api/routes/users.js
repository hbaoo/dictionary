import express from "express";

import { getAllUser, createUser, getUserById } from "../controller/user.js";

const router = express.Router();

router.get('/', getAllUser);
router.get('/:id', getUserById);

router.post('/createUser', createUser);
export default router;