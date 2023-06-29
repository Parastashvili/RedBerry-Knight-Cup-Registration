import starting from "../assets/starting.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BlackButton } from "../styled-components/StyledButtons";
import arrow from "../assets/arrow-right-circle.png";
import logo from "../assets/Khight cup logo.svg";
export default function Home() {
  return (
    <Main>
      <StyledBody>
        <div>
          <Header>
            <img src={logo} alt="header logo" />
          </Header>
          <ImageContainer />
        </div>
        <Lola>
          <StyledText>
            <h1>
              CHESS SAYS <br /> WHO WE ARE
            </h1>
            <p>A LOT ABOUT</p>
          </StyledText>
          <Link
            className="link"
            to={"/personal"}
            style={{ textdecoration: "none" }}
          >
            <BlackButton style={{ border: "0px" }}>
              <BtnText>
                <p> Get started</p>
                <img src={arrow} alt="" />
              </BtnText>
            </BlackButton>
          </Link>
        </Lola>
      </StyledBody>
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
const StyledBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fd5334;
  max-width: 1920px;
  max-height: 1080px;
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
  padding: 85px;
  width: 997px;
  .link {
    text-decoration: none;
  }
`;
