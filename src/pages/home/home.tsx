import { Card } from "../../components/card/card";
import { CardSection } from "./styles";
import { Product } from "../../utils/types/products.type";
import { useState, useEffect } from "react";
import { api } from "../../utils/api/api";
import { Header } from "../../components/header/header";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [control, setControl] = useState<boolean>(false);

  async function getProductsData() {
    const allProducts = await api.getProducts();
    setProducts(allProducts ?? []);
  }

  function updatePage() {
    setControl(!control);
  }

  useEffect(() => {
    getProductsData();
  }, [control]);

  return (
    <>
      <Header controlPage={updatePage} />
      <CardSection>
        {products.map((product) => (
          <Card
            id={product.id}
            description={product.description}
            imageURL={product.imageURL}
            name={product.name}
            price={product.price}
            category={product.category}
            update={updatePage}
          />
        ))}
      </CardSection>
    </>
  );
}
