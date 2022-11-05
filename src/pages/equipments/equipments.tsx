import { useEffect, useState } from "react";
import { Product } from "../../utils/types/products.type";
import { api } from "../../utils/api/api";
import { Card } from "../../components/card/card"
import { CardSection } from "./styles";
import { Header } from "../../components/header/header";

interface HeaderProps {
  updatePage: () => void;
}

export function Equipments({updatePage}: HeaderProps) {

  const [products, setProducts] = useState<Product[]>([]);

  async function getProductsData() {
    const allProducts = await api.getProducts()
    setProducts(allProducts ?? []);
     
  }

  useEffect(() => {
    getProductsData();
  }, [])
  
  return (
    <>
      <Header controlPage={updatePage} />
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
              update={updatePage}
              />
            );
            }
        })}
      </CardSection>
    </>
  )
}
