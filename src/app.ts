import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { loadModules } from "./modules";
import swaggerSetup from "./docs/swagger";

dotenv.config();

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.NODE_PORT ?? 3000);
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(morgan("short"));
app.get("/", (req, res) => res.send("Service Works"));
app.use("/api/v1", loadModules());

// API documentation
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup));
console.log(`  Docs are available on http://localhost:${app.get("port")}/api/v1/docs`);

export default app;
