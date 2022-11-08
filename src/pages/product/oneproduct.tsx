import { Product } from "../../utils/types/products.type";
import { useNavigate } from "react-router-dom";
import { ProductSection, ProductContent } from "./styles";
import { AiFillCloseSquare } from "react-icons/Ai";

interface CardProps extends Product {}

export function OneProduct({
  id,
  name,
  description,
  price,
  category,
  imageURL,
}: CardProps) {
  const navigate = useNavigate();

  return (
    <>
      <ProductSection>
        <ProductContent>
          <img src={imageURL} alt={name} />
          <h2>{name}</h2>
          <span>{"R$ " + price}</span>
          <p>{description}</p>
        </ProductContent>
        <button onClick={() => navigate("/")}>
          <AiFillCloseSquare size={25} />
        </button>
      </ProductSection>
    </>
  );
}
