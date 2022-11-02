import { SiCockroachlabs } from "react-icons/si"
import { Link, useNavigate } from "react-router-dom"
import { HeaderComponent, HeaderLogo, HeaderSearch, HeaderSection } from "./styles"
import Modal from "react-modal"
import { useState } from "react";
import { api } from "../../utils/api/api"
import { Product } from "../../utils/types/products.type";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '21rem',
    height: '20rem',
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

export  function Header({ getProducts }: any) {

  const [modalIsOpen, setModalOpen] = useState(false);

  function handleModal() {
    setModalOpen(!modalIsOpen);
  }

  const navigate = useNavigate();

  return (  
    <>
        <HeaderComponent>
            <HeaderLogo>
              <Link to="/">
                <SiCockroachlabs size={23} />
                <h1>Cheap Store</h1>   
              </Link>             
            </HeaderLogo>
            <HeaderSearch>
                <input type="text" placeholder="Search Product" />
            </HeaderSearch>
            <HeaderSection> 
                <button onClick={() => {
                    navigate("/clothes")
                }}> Clothes </button>
                <button onClick={() => {
                    navigate("/equipments")
                }}> Equipments </button>
                <button onClick={() => {
                    navigate("/off")
                }}>#Off </button>
                <button> Add to cart!</button>
            </HeaderSection>
        </HeaderComponent>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="form Create"
        >
        {/* <Form getAll={getProducts} handleModal={handleModal} /> */}
        </Modal>
              
          
    </>
    
  )
}
