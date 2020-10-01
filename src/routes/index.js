import { Router } from "express";
import welcomeRoute from "./welcome.router";

const router = Router();
router.use("/", welcomeRoute);

export default router;
