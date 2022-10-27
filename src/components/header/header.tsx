import { SiCockroachlabs } from "react-icons/si"
import { Link } from "react-router-dom"
import { HeaderComponent, HeaderLogo, HeaderSearch, HeaderSection } from "./styles"

export  function Header() {
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
                <a>Home</a> 
                <a>Products</a> 
                <button> Add to cart!</button>
            </HeaderSection>
            

        </HeaderComponent>
    </>
    
  )
}
