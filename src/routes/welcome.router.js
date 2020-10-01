import { Router } from "express";
import Welcome from "../utils/welcome";

const router = Router();

router.get("/", Welcome);

export default router;
