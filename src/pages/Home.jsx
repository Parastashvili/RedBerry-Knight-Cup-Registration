import starting from "../assets/starting.png";
import styled from "styled-components";
import StyledButton from "../styled-components/StyledButton";
import arrow from "../assets/arrow-right-circle.png";
import BackImg from "../components/BackImg";
export default function Home() {
  return (
    <StyledBody>
      <BackImg background={starting} />

      <Lola>
        <StyledText>
          <h1>
            CHESS SAYS <br /> WHO WE ARE
          </h1>
          <p>A LOT ABOUT</p>
        </StyledText>
        <StyledButton>
          <BtnText>
            <p> Get started</p>
            <img src={arrow} alt="" />
          </BtnText>
        </StyledButton>
      </Lola>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fd5334;
  width: 100vw;
`;
const StyledText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  transform: translateY(-150px);
  h1 {
    font-weight: 800;
    font-size: 80px;
    line-height: 109px;
    color: #ffffff;
  }
  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #212529;
    transform: translate(-25px, -15px);
  }
`;

const BtnText = styled.div`
  display: flex;
  flex-direction: row;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #ffffff;
  }
  img {
    padding-left: 12px;
  }
`;
const Lola = styled.div`
  margin-left: 85px;
`;
