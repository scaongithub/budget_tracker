import { Router } from "express";
import { createCategory, createSubcategory, getCategories } from "../controllers/categoryController.js";

const router = Router();

router.get("/", getCategories);
router.post("/", createCategory);
router.post("/:categoryId/subcategories", createSubcategory);

export default router;
