import { FormEvent } from "react";
import { ProductInput } from "../../utils/types/products.type";
import { api } from "../../utils/api/api";
import { FormComponent } from "./styles";



export function Form( {getProducts, handleModal}: any ) {

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newProduct: ProductInput = {
        name: e.currentTarget.productName.value,
        description: e.currentTarget.productDescription.value,
        price: e.currentTarget.productPrice.value,
        category: e.currentTarget.productCategory.value,
        imageURL: e.currentTarget.productImage.value,
    };

    handleModal();
    const product = await api.createProduct(newProduct);
    getProducts(product);
    }

  return (
    <>
        <FormComponent>
            <form onSubmit={handleSubmit}>
                <label>Product Name:</label>
                <input type="text" name="productName"></input>
                <label>Product Description:</label>
                <input type="text" name="productDescription"></input>
                <label>Product Price:</label>
                <input type="number" name="productPrice"></input>
                <label>Product Category:</label>
                <input type="text" name="productCategory"></input>
                <label>Product Image:</label>
                <input type="text" name="productImage"></input>
                <button type="submit">Submit</button>
            </form>
        </FormComponent>
    </>
  )
};
