import Header from "./Header";
import styled from "styled-components";
export default function BackImg(props) {
  return (
    <StyledBack>
      <Header />
      <img className="imgback" src={props.background} alt="" />
    </StyledBack>
  );
}

const StyledBack = styled.section`
  position: relative;
  width: 923px;
  .imgback {
    height: 100%;
    width: 100%;
  }
`;
