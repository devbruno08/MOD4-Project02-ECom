import { useEffect, useState } from "react";
import { Product } from "../../utils/types/products.type";
import { getProducts } from "../../utils/api/api";
import { Card } from "../../components/card/card"
import { CardSection } from "./styles";

export function Equipments() {

  const [products, setProducts] = useState<Product[]>([]);

  async function getProductsData() {
    const allProducts = await getProducts()
    setProducts(allProducts);
     
  }

  useEffect(() => {
    getProductsData();
  }, [])
  
  return (
    <>
      <CardSection>
        {products.map((product) => {
          if(product.category.includes("equipments")) {
            return (
              <Card
              id={product.id}
              description={product.description}
              imageURL={product.imageURL}
              name={product.name}
              price={product.price}
              category={product.category}
              />
            );
            }
        })}
      </CardSection>
    </>
  )
}
