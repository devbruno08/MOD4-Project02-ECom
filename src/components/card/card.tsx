import { Product } from "../../utils/types/products.type";
import { CardSection } from "./styles";

interface CardProps extends Product {
    update: () => void;
}

export function Card({ id, name, description, price, category, imageURL, update}: CardProps){
    return (
        <CardSection>
            <img src={imageURL} alt={name}/>
            <h2>{name}</h2>
            <span>{price}</span>
            <p>{description}</p>
            <button>Update</button>
            <button>Delete</button>
            <button>Add to cart!</button>
        </CardSection>
    )
}