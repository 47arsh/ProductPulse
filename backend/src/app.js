import express from "express";

const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.status(200).json({
        project: "ProductPulse",
        message: "Welcome to ProductPulse API"
    });
});

export default app;