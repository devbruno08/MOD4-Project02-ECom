import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.4%;
  background-color: rgba(0, 0, 0, 0.9);
  align-items: center;
`;

export const HeaderLogo = styled.section`
  display: flex;
  padding-left: 0.5%;
  color: #4b0082;
  align-items: center;

  h1 {
    color: white;
    padding-left: 8px;
  }

  a {
    text-decoration: none;
    display: flex;
    color: #4b0082;
    align-items: center;
  }
`;

export const HeaderSearch = styled.section``;

export const HeaderSection = styled.section`
  display: flex;
  color: #4b0082;
`;

type ButtonColor = {
  color: string;
};

export const Buttons = styled.button<ButtonColor>`
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => props.color};
`;
