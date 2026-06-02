import { Router } from "express";
import tasksRouter from "./tasks.js";
import authRouter from "./auth.js";
const router = Router();

router.use("/tasks", tasksRouter);

router.use("/auth", authRouter);

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