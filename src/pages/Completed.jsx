import complete from "../assets/complete.png";
import rocket from "../assets/Rocket.png";
import BackImg from "../components/BackImg";
import styled from "styled-components";
export default function Completed() {
  return (
    <SectionStyle>
      <>
        <BackImg background={complete} />

        <StyleDiv>
          <img src={rocket} alt="" />
          <h1>Onboarding completed!</h1>
        </StyleDiv>
      </>
    </SectionStyle>
  );
}

const SectionStyle = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
`;

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(80%);
  h1 {
    font-weight: 800;
    font-size: 36px;
    line-height: 54px;
  }
`;
