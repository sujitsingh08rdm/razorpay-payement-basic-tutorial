import express from "express";
import paymentRoute from "./routes/productRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/v1", paymentRoute);

export default app;
