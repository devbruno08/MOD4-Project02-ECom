import { SiCockroachlabs } from "react-icons/si"
import { HeaderComponent, HeaderLogo } from "./styles"

export  function Header() {
  return (
    <>
        <HeaderComponent>
            <HeaderLogo>
                <SiCockroachlabs />
                <h1>Cheap Store</h1>
                <div> Home </div>
                <div> Products </div>
                <div> </div>
            </HeaderLogo>
            <button> Add to cart!</button>

        </HeaderComponent>
    </>
    
  )
}
