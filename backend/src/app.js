import 'dotenv/config';
import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes/index.js";

const app = express();

// Helmet adiciona headers HTTP de segurança (CSP, HSTS, etc.)
app.use(helmet());

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));

app.use(express.json());

app.use("/", routes);

app.get("/health", (_req, res) => res.json(
    { 
        ok: true,
        uptime: process.uptime(),
        timestamp: Date.now()
    }
));

export default app;