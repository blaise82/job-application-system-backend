import { Router } from "express";
import welcomeRoute from "./welcome.router";
import userRoutes from './users.router';
import applicationRoutes from './application.router'

const router = Router();
router.use("/", welcomeRoute);
router.use('/api/v1/auth', userRoutes);
router.use('/api/v1/application', applicationRoutes);

export default router;
