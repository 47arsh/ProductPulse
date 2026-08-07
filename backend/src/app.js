import express from "express";
import morgan from "morgan";

import productRoutes from "./routes/product.routes.js";
import errorHandler from "./middleware/error.middleware.js";
import notFound from "./middleware/notFound.middleware.js";


const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/",(req,res) => {
    res.status(200).json({
        project: "ProductPulse",
        message: "Welcome to ProductPulse API"
    });
});

app.get("/api/health", (req,res) => {
    res.json({
        status: "success",
        message: "API is healthy",
        uptime: process.uptime()
    })
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;