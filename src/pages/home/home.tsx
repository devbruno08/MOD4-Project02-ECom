import { Card } from "../../components/card/card";
import { CardSection } from "./styles";
import { Product } from "../../utils/types/products.type";
import { useState, useEffect } from "react";
import Modal from 'react-modal';
import { api } from "../../utils/api/api";
import { Header } from "../../components/header/header";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '21rem',
    height: '25rem',
    transform: 'translate(-50%, -50%)',
    backgroundColor: ' rgba(0, 0, 0, 0.8)',
    borderRadius: '15px',
    border: 'none',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.4)',
  },
};

Modal.setAppElement('#root');

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [control, setControl] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [oneProduct, setOneProduct] = useState({});

  async function getProductsData() {
    const allProducts = await api.getProducts();
    setProducts(allProducts ?? []);
  }

  function updatePage() {
    setControl(!control);
  }

  function handleModal() {
    setModalOpen(!modalOpen);
  }

  useEffect(() => {
    getProductsData();
  }, [control]);

  return (
    <>
      <Header controlPage={updatePage} />
      <CardSection>
        {products.map((product, index) => (
          // <button onClick={() => {
          //   setOneProduct(product);
          //   handleModal();
          // }}
          // key={index}
          // >
            <Card
              id={product.id}
              description={product.description}
              imageURL={product.imageURL}
              name={product.name}
              price={product.price}
              category={product.category}
              update={updatePage}
            />
          // </button>  
        ))}
      </CardSection>
      {/* <Modal
        isOpen={modalOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Card details"
      ></Modal> */}
    </>
  );
}
