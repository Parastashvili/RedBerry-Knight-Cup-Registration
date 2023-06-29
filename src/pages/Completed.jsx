import rocket from "../assets/Rocket.png";
import styled from "styled-components";
import starting from "../assets/complete.png";
import logo from "../assets/Khight cup logo.svg";
export default function Completed() {
  return (
    <Main>
      <SectionStyle>
        <>
          <div>
            <Header>
              <img src={logo} alt="header logo" />
            </Header>
            <ImageContainer />
          </div>
          <StyleDiv>
            <img src={rocket} alt="" />
            <h1>Onboarding completed!</h1>
          </StyleDiv>
        </>
      </SectionStyle>
    </Main>
  );
}
const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 60px;
  width: 923px;
  height: 84px;
  background-color: #7025fb;
`;
const ImageContainer = styled.div`
  width: 923px;
  height: 996px;
  background: url(${starting});
  background-size: cover;
`;
const SectionStyle = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const StyleDiv = styled.div`
  width: 997px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 800;
    font-size: 36px;
    line-height: 54px;
  }
`;
