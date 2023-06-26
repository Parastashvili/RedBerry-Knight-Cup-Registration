import styled from "styled-components";
import logo from "../assets/diadema.png";

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <h3>Redberry Knight Cup</h3>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  background-color: #7025fb;
  height: 84px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 60px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  h3 {
    color: #ffffff;
    padding-left: 8px;
  }
  img {
    height: 18.33px;
  }
`;
