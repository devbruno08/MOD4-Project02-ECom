import { Product } from "../../utils/types/products.type";
import { CardSection } from "./styles";

export function Card({ id, name, description, price, category, imageURL}: Product){
    return (
        <CardSection>
            <img src={imageURL} alt={name}/>
            <h2>{name}</h2>
            <span>{price}</span>
            <p>{description}</p>
        </CardSection>
    )
}