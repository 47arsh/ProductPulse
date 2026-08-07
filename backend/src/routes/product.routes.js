import express from "express";

import{
    getProducts,
    createProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);

export default router;