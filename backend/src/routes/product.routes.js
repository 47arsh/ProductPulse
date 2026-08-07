import express from "express";


import{
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    searchProducts
} from "../controllers/product.controller.js";

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);

router.get("/search",searchProducts);

router.get("/:id",getProduct);

router.put("/:id",updateProduct);

router.delete("/:id",deleteProduct);

export default router;