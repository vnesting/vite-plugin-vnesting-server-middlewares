import { Router } from "express";
let router = Router();
router.get("add", function (req, res, next) {
	console.log("Time:", Date.now());
	next();
});
export default router;
