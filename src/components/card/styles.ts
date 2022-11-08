import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 20%;
  height: 40%;
  border: 2px #4b0082 solid;
  justify-content: space-evenly;
  margin-top: 5px;;
`;

export const CardContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 99%;
    height: 62.5%;
  }

  h2{
    font-size: 100%;
    margin: 2px;
  }

  span {
    font-size: 0.9rem;
  }

  p{
    margin-top: 5px;
    font-size: 0.7rem;
  }

`;

export const ButtonSection = styled.section` 
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 90%;
  
  button{
  margin: 0.5px;
  width: 35%;
  height: 70%;
  border-radius: 15%;
  background-color: #4b0082;
  color: black;
  font-weight: bold;
  cursor: pointer;
  }
`
