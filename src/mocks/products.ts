import { Product } from "../utils/types/products.type";
import { productList } from "./productList";

export async function getProducts(): Promise<Product[]> {
    return productList;
}