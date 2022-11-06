import styled from "styled-components" ;

export const HeaderComponent = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 7px;
    background-color: rgba(0, 0, 0, 0.9);
    align-items: center;
`;

export const HeaderLogo = styled.section`
    display: flex;
    padding-left: 5px;
    color: #4B0082;
    align-items: center;
    
    h1 { 
        color: white;
        padding-left: 8px;
    };

    a{
        text-decoration: none;
        display: flex;
        color: #4B0082;
        align-items: center;
    }

`;

export const HeaderSearch = styled.section`


`

export const HeaderSection = styled.section`
    display: flex;
    color: #4B0082;

    button{
    background-color: transparent;
    color: white;
    }
    
    
`



