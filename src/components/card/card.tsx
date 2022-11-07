import { TbShoppingCartPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api/api";
import { Product } from "../../utils/types/products.type";
import { CardContent, CardSection, ButtonSection, Buttons } from "./styles";

interface CardProps extends Product {
  update: () => void;
}

export function Card({
  id,
  name,
  description,
  price,
  category,
  imageURL,
  update,
}: CardProps) {
  const navigate = useNavigate();

  async function DeleteCard() {
    const toDeleted = await api.deleteProduct(id);
    if (toDeleted) {
      update();
    }
  }

  return (
    <CardSection>
      <CardContent>
        <img src={imageURL} alt={name} />
        <h2>{name}</h2>
        <span>{"R$ " +price}</span>
        <p>{description}</p>
      </CardContent>
      <ButtonSection>
        <Buttons
          color="black"
          onClick={() => {
            navigate("/update/" + id);
          }}
        >
          Update
        </Buttons>
        <Buttons color="black" onClick={DeleteCard}>
          Delete
        </Buttons>
      </ButtonSection>
    </CardSection>
  );
}
