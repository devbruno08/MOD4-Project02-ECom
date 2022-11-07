import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  
  min-width: 20%;
  max-width: 20%;
  height: 40%;
  border: 2px #4b0082 solid;
  justify-content: space-evenly;
  margin: 2px;
`;

export const CardContent = styled.section`
  img {
    margin-bottom: 5%;
    border-radius: 15%;
    width: 100%;
    height: 60%;
    
  }

  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  margin: 0 auto;

  h2{
    font-size: 130%;
  }
  
  
  align-items: center;
  justify-content: center;


  p {
    margin-top: 5%;
  }
`;

export const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const Buttons = styled.button`
  padding: 1px;
  margin: 0 8%;
  border-radius: 15%;
  background-color: #4b0082;
  color: black;
  font-weight: bold;
  cursor: pointer;
`;
