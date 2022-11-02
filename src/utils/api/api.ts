import { Product } from "../types/products.type";
import axios from "axios";

axios.create({
  baseURL: "hhttp://localhost:3000/products",
  headers: { "Content-Type": "application/json" },
});

export const api = {
  getProducts: async (): Promise<Product[]> => {
    try {
      const products = await axios.get("/all-products");
      return products.data;
    } catch (err: any) {
      alert("Erro no servidor");
      throw new Error(err);
    }
  },

  createProduct: async (product: Product): Promise<Product> => {
    try {
      const newProduct = await axios.post("/create", product);
      return newProduct.data;
    } catch (err: any) {
      alert("Erro ao criar o produto");
    }
  },
};
