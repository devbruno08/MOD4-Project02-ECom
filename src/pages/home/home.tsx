import { Card } from "../../components/card/card";
import { CardSection } from "./styles"
import { Product } from "../../utils/types/products.type";
import { useState, useEffect } from "react"
import { getProducts } from "../../utils/api/api";

export function Home() {

  const [products, setProducts] = useState<Product[]>([]);

  async function getProductsData() {
    const allProducts = await getProducts();
    setProducts(allProducts);
  }

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <>
      <CardSection>
        {products.map((product) => (
          <Card
          id={product.id}
          description={product.description}
          imageURL={product.imageURL}
          name={product.name}
          price={product.price}
          category={product.category}
          />
        ))}
      </CardSection>
    </>
  )
}
