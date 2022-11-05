import { Product, ProductInput } from "../types/products.type";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/products";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const api = {
  getProducts: async (): Promise<Product[] | undefined> => {
    try {
      const products = await axios.get("/all-products");
      return products.data;
    } catch (err: any) {
      alert("Erro no servidor");
      throw new Error(err);
    }
  },

  createProduct: async (product: ProductInput): Promise<ProductInput | undefined> => {
    try {
      const newProduct = await axios.post("/create", product);
      console.log(newProduct)
      return newProduct.data;
    } catch (err: any) {
      alert("Erro ao criar o produto");
      throw new Error(err);
    }
  },
};
