import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/Khight cup logo.svg";
import RightHeader from "../components/RightHeader";
import PersonalBG from "../assets/second.png";
import SharedPageIndicator from "../components/SharedPageIndicator";
import StyledPersonal from "../styled-components/StyledPersonal";
import arrow from "../assets/arrow-right-circle.png";
import validImage from "../assets/ok.png";
import errorImage from "../assets/Mark.png";

const Personal = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    trigger,
  } = useForm();
  useEffect(() => {
    const fields = ["name", "mail", "mobile", "date"];
    fields.forEach((field) => {
      const savedValue = localStorage.getItem(field);
      if (savedValue) {
        setValue(field, savedValue);
        trigger(field);
      }
    });
  }, [setValue, trigger]);
  const saveToLocalStorage = (name, value) => {
    localStorage.setItem(name, value);
  };
  const handleInputChange = (fieldName, e) => {
    const value = e.target.value;
    setValue(fieldName, value);
    saveToLocalStorage(fieldName, value);
    trigger(fieldName);
    handleInputChangeForMandatoryFields(e);
  };
  const onSubmit = (data) => {
    console.log(data.name);
    console.log(data.mail);
    console.log(data.mobile);
    console.log(data.date);
  };
  const handleInputChangeForMandatoryFields = (event) => {
    const input = event.target;
    const asterisk = input.nextElementSibling;
    if (input.value === "") {
      asterisk.style.display = "block";
    } else {
      asterisk.style.display = "none";
    }
  };
  return (
    <MainContainer>
      <div className="innerCont">
        <div>
          <Header>
            <img src={logo} alt="" />
          </Header>
          <ImageContainer />
        </div>
        <RighdSide>
          <RightHeader />
          <SharedPageIndicator />
          <StyledPersonal>
            <h1>Personal information</h1>
            <p>This is basic informaton field</p>
          </StyledPersonal>
          <InputFieldCont onSubmit={handleSubmit(onSubmit)}>
            <div>
              <InputField
                placeholder="Name"
                type="text"
                maxLength={30}
                {...register("name", {
                  required: true,
                  minLength: 2,
                  maxLength: 30,
                })}
                onChange={(e) => handleInputChange("name", e)}
              />
              <span className="red-asterisk name">*</span>
              {errors.name && <img src={errorImage} alt="error Icon" />}
              {!errors.name &&
                localStorage.getItem("name") != undefined &&
                localStorage.getItem("name") != "" && (
                  <img src={validImage} alt="valid Icon" />
                )}
            </div>
            <div>
              <InputField
                placeholder="Email"
                type="mail"
                maxLength={50}
                {...register("mail", {
                  required: true,
                  minLength: 5,
                  maxLength: 50,
                  pattern: {
                    value: /^[\w.%+-]+@redberry\.ge$/,
                  },
                })}
                onChange={(e) => handleInputChange("mail", e)}
              />
              <span className="red-asterisk mail">*</span>
              {errors.mail && (
                <img className="buzz" src={errorImage} alt="error Icon" />
              )}
              {!errors.mail &&
                localStorage.getItem("mail") != undefined &&
                localStorage.getItem("mail") != "" && (
                  <img src={validImage} alt="valid Icon" />
                )}
            </div>
            <div>
              <InputField
                placeholder="Mobile"
                type="text"
                maxLength={9}
                {...register("mobile", {
                  required: true,
                  minLength: 9,
                  maxLength: 9,
                  pattern: { value: /5[0-9]{8}/ },
                })}
                onChange={(e) => handleInputChange("mobile", e)}
              />
              <span className="red-asterisk mobile">*</span>
              {errors.mobile && (
                <img className="buzz" src={errorImage} alt="error Icon" />
              )}
              {!errors.mobile &&
                localStorage.getItem("mobile") != undefined &&
                localStorage.getItem("mobile") != "" && (
                  <img className="" src={validImage} alt="valid Icon" />
                )}
            </div>
            <div>
              <InputField
                placeholder="Date of birth"
                type="date"
                {...register("date", {
                  required: true,
                })}
                onChange={(e) => handleInputChange("date", e)}
              />
              <span className="red-asterisk date">*</span>
              {errors.date && (
                <img className="buzz" src={errorImage} alt="error Icon" />
              )}
              {!errors.date &&
                localStorage.getItem("date") != undefined &&
                localStorage.getItem("date") != "" && (
                  <img className="" src={validImage} alt="valid Icon" />
                )}
            </div>
            <Buttons className="buttonCont">
              <BackButton to="/">Back</BackButton>
              <Link className="route" to={isValid ? "/experience" : null}>
                <button className="nextBTN" type="submit">
                  Next
                  <img src={arrow} alt="arrow" />
                </button>
              </Link>
            </Buttons>
          </InputFieldCont>
        </RighdSide>
      </div>
    </MainContainer>
  );
};

export default Personal;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  .innerCont {
    display: flex;
  }
`;
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
    border-radius: 4px;
    position: relative;
    padding: 8px 20px 8px 16px;
    max-width: 743px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.125);
    input::placeholder {
      color: #212529;
    }
    div:hover {
      background-color: #f8f9fa;
      input {
        background-color: #f8f9fa;
      }
      input::placeholder {
        color: rgba(33, 37, 41, 0.5);
      }
    }
    .red-asterisk {
      display: block;
      position: absolute;
      top: 25px;
      transform: translateY(-50%);
      color: #dc3545;
    }
    .name {
      left: 75px;
    }
    .mail {
      left: 70px;
    }
    .mobile {
      left: 85px;
    }
    .date {
      left: 140px;
    }
  }
  .buttonCont {
    margin-top: 48px;
    background-color: transparent;
    box-shadow: none;
  }
  .buttonCont:hover {
    background-color: transparent;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;
const InputField = styled.input`
  width: 700px;
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
  .route {
    text-decoration: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 775px;
  padding: 0px 48px;
  button {
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
    height: 61px;
    text-decoration: none;
    background: #212529;
    color: #ffffff;
    gap: 12px;
    width: 144px;
    border: 4px solid #ffffff;
    cursor: pointer;
  }
  button:hover {
    border: 4px solid rgba(194, 165, 249, 0.8);
    background: #212529;
  }
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
  :hover {
    border: 1px solid rgba(194, 165, 249, 0.8);
    background: rgba(185, 180, 195, 0.3);
  }
`;
