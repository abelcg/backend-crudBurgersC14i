import { Router } from "express";
import {
  showProducts,
  createProduct,
  getOneProduct,
  updateProduct,
  deleteProduct
} from "../controllers/products.controllers";

//creamos la instancia del router
const router = Router();

//crear mis rutas

router
.route("/")
.get(showProducts)
.post(createProduct)

router
.route("/:id")
.get(getOneProduct)
.delete(deleteProduct)
.put(updateProduct)


export default router;
