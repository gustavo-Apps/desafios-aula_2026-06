import { Router } from "express";
import tasksRouter from "./tasks.js";
import authRouter from "./auth.js";
import lookupRouter from "./lookup.js";
const router = Router();

router.use("/tasks", tasksRouter);
router.use("/auth", authRouter);
router.use("/lookup", lookupRouter);

router.get("/", (_req, res) => {
    res.json({ ok: true, message: "API rodando!" });
    return res.status(200).json({ ok: true, message: "API rodando!" });
});
router.get("/heartbeat", (_req, res) => {
    return res.status(200).json(
        {   ok: true, 
            uptime: process.uptime()
        });
});

export default router;