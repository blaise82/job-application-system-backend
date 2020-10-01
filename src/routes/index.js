import { Router } from "express";
import welcomeRoute from "./welcome.router";
import userRoutes from './users.router';

const router = Router();
router.use("/", welcomeRoute);
router.use('/api/v1/auth', userRoutes);

export default router;
