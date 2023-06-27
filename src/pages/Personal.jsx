import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/Khight cup logo.svg";
import RightHeader from "../components/RightHeader";
import PersonalBG from "../assets/second.png";
import SharedPageIndicator from "../components/SharedPageIndicator";
import StyledPersonal from "../styled-components/StyledPersonal";
import validImage from "../assets/ok.png";
import errorImage from "../assets/Mark.png";
import Buttons from "../components/Buttons";
import arrow from "../assets/arrow-right-circle.png";

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
        document.getElementById(field).style.display = "none";
      }
    });
  }, [setValue, trigger]);
  useEffect(() => {
    if (isValid) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  }, [isValid]);
  const handleInputChangeForMandatoryFields = (event) => {
    const input = event.target;
    const asterisk = input.nextElementSibling;
    if (input.value === "") {
      asterisk.style.display = "block";
      setActive("");
    } else {
      asterisk.style.display = "none";
      setActive("active");
    }
  };
  const handleInputChange = (fieldName, e) => {
    const value = e.target.value;
    setValue(fieldName, value);
    saveToLocalStorage(fieldName, value);
    trigger(fieldName);
    handleInputChangeForMandatoryFields(e);
  };
  const saveToLocalStorage = (name, value) => {
    localStorage.setItem(name, value);
  };
  const onSubmit = (data) => {
    console.log(data.name);
    console.log(data.mail);
    console.log(data.mobile);
    console.log(data.date);
  };
  const [active, setActive] = useState("");
  const [isDone, setIsDone] = useState(false);
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
          <SharedPageIndicator bgcolor={active} done={isDone} />
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
              <span id="name" className="red-asterisk name">
                *
              </span>
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
              <span id="mail" className="red-asterisk mail">
                *
              </span>
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
              <span id="mobile" className="red-asterisk mobile">
                *
              </span>
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
              <span id="date" className="red-asterisk date">
                *
              </span>
              {errors.date && (
                <img className="buzz" src={errorImage} alt="error Icon" />
              )}
              {!errors.date &&
                localStorage.getItem("date") != undefined &&
                localStorage.getItem("date") != "" && (
                  <img className="" src={validImage} alt="valid Icon" />
                )}
            </div>
            <Buttons
              backLink="/"
              NextFunc={isValid ? "/experience" : null}
              img={<img src={arrow} alt="arrow" />}
              buttonTxt="Next"
            />
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
  padding: 0px 60px;
  width: 923px;
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
  padding: 85px 48px 88px 48px;
  margin: 0px;
  div {
    border-radius: 4px;
    position: relative;
    padding: 8px 20px 8px 16px;
    max-width: 743px;
    height: 46px;
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
  width: 680px;
  outline: none;
  border: none;
  display: flex;
  border-radius: 4px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #212529;
`;
