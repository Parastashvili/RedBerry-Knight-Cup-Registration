import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import BackImg from "../components/BackImg";
import PersonalBG from "../assets/second.png";
import SharedPageIndicator from "../components/SharedPageIndicator";
import RightHeader from "../components/RightHeader";
import arrow from "../assets/arrow-right-circle.png";
import StyledPersonal from "../styled-components/StyledPersonal";
import approved from "../assets/ok.png";
import error from "../assets/Mark.png";
import Header2 from "../components/Header";
export default function Personal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const nameValue = watch("name");
  useEffect(() => {
    localStorage.setItem("name", nameValue);
  }, [nameValue]);
  const emailValue = watch("email");
  useEffect(() => {
    localStorage.setItem("email", emailValue);
  }, [emailValue]);
  const mobileValue = watch("mobile");
  useEffect(() => {
    localStorage.setItem("mobile", mobileValue);
  }, [mobileValue]);
  const dateValue = watch("date");
  useEffect(() => {
    localStorage.setItem("date", dateValue);
  }, [dateValue]);
  console.log(watch("name"));
  return (
    <div className="App">
      <div className="innerCont">
        <div>
          <GlobalStyles />
          <BackImg background={PersonalBG} />
          <ImageContainer />
        </div>
        <RighdSide>
          <RightHeader />
          <SharedPageIndicator />
          <StyledPersonal>
            <h1>Personal information</h1>
            <p>This is basic informaton fields</p>
          </StyledPersonal>
          <InputFieldCont>
            <div>
              <InputField
                placeholder="Name *"
                type="text"
                maxLength={30}
                {...register("name")}
              />
            </div>
            <div>
              <InputField
                placeholder="Email address *"
                type="email"
                {...register("email")}
              />
            </div>
            <div>
              <InputField
                placeholder="Phone number *"
                type="mobile"
                {...register("mobile")}
              />
            </div>
            <div>
              <InputField
                placeholder="Date of birth *"
                type="date"
                {...register("date")}
              />
            </div>
          </InputFieldCont>
          <Buttons>
            <BackButton to="/">Back</BackButton>
            <NextButton type="submit">
              Next <img src={arrow} alt="arrow" />
            </NextButton>
          </Buttons>
        </RighdSide>
      </div>
    </div>
  );
}
const GlobalStyles = createGlobalStyle`
body{
  margin: 0px;
}
.App {
  min-width: 1920px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.innerCont{
  display: flex;
}`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 60px;
  width: 863px;
  height: 84px;
  background-color: #7025fb;
`;
const ImageContainer = styled.div`
  width: 923px;
  height: 996px;
  background: url(${PersonalBG});
  background-size: cover;
`;

const RighdSide = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputFieldCont = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 85px 48px 88px;
  margin: 0px;
  div {
    padding: 8px 20px 8px 16px;
    max-width: 743px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.125);
  }
  img {
    width: 20px;
    height: 20px;
  }
`;
const InputField = styled.input`
  width: 600px;
  outline: none;
  border: none;
  display: flex;
  border-radius: 4px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #212529;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 775px;
  padding: 0px 48px;
`;
const BackButton = styled(Link)`
  border: 1px solid #212529;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-transform: capitalize;
  color: #212529;
  width: 93px;
  height: 53px;
  cursor: pointer;
  text-decoration: none;
`;
const NextButton = styled(BackButton)`
  background: #212529;
  color: #ffffff;
  gap: 12px;
  width: 128px;
`;
