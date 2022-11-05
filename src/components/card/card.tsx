import { MdUpdate } from "react-icons/md";
import { api } from "../../utils/api/api";
import { Product } from "../../utils/types/products.type";
import { CardSection } from "./styles";

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

    async function DeleteCard() {
        const toDeleted = await api.deleteProduct(id)
        if(toDeleted) {
        update();
        };
    };

  return (
    <CardSection>
      <img src={imageURL} alt={name} />
      <h2>{name}</h2>
      <span>{price}</span>
      <p>{description}</p>
      <button>Update</button>
      <button onClick={DeleteCard}>Delete</button>
      <button>Add to cart!</button>
    </CardSection>
  );
}
