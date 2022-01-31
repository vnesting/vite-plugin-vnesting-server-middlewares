import { Router } from "express";
import page from "./page";

let router = Router();

router.use("page", page);
export default router;
