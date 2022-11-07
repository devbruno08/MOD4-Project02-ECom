import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 8%;
  min-width: 20%;
  height: 40%;
  border: 2px #4b0082 solid;
  justify-content: space-evenly;
  margin: 2px;
`;

export const CardContent = styled.section`
  img {
    margin-bottom: 15px;
    border-radius: 15%;
    width: 8rem;
    height: 8rem;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const Buttons = styled.button`
  padding: 1px;
  margin: 5px;
  border-radius: 15%;
  background-color: #4b0082;
  color: black;
  font-weight: bold;
  cursor: pointer;
`;
