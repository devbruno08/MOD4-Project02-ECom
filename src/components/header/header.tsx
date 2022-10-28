import { SiCockroachlabs } from "react-icons/si"
import { Link, useNavigate } from "react-router-dom"
import { HeaderComponent, HeaderLogo, HeaderSearch, HeaderSection } from "./styles"
import { NavigationMenu } from "@radix-ui/react-navigation-menu"


export  function Header() {

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
              
          
    </>
    
  )
}
