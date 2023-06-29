import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Calendar } from "primereact/calendar";
import { BackButton, BlackButton } from "../styled-components/StyledButtons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/Khight cup logo.svg";
import RightHeader from "../components/RightHeader";
import SharedPageIndicator from "../components/SharedPageIndicator";
import StyledPersonal from "../styled-components/StyledPersonal";
import validImage from "../assets/ok.png";
import ErrorMsg from "../components/ErrorMsg";
import arrow from "../assets/arrow-right-circle.png";
import Quotes from "../styled-components/Quotes";
import Header from "../styled-components/Header";
import PersonalBG from "../assets/second.png";
const Personal = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm();
  const { onChange, onBlur } = register("name");
  const [selectedDate, setSelectedDate] = useState(null);
  const [active, setActive] = useState("");
  const [isDone, setIsDone] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const fields = ["name", "mail", "mobile", "date"];
    fields.forEach((field) => {
      const savedValue = localStorage.getItem(field);
      if (savedValue) {
        setValue(field, savedValue);
        document.getElementById(field).style.display = "none";
      }
      handleSubmit(onSubmit);
    });
  }, [setValue]);

  useEffect(() => {
    const savedDate = localStorage.getItem("date");
    if (savedDate) {
      setSelectedDate(new Date(savedDate));
      document.getElementById("date").style.display = "none";
      hideDateasterisk();
    }
  }, []);
  useEffect(() => {
    if (selectedDate) {
      localStorage.setItem("date", selectedDate);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (isValid) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  }, [isValid]);
  const hideDateasterisk = () => {
    document.getElementById("date").style.display = "none";
  };
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
  const saveToLocalStorage = (name, value) => {
    localStorage.setItem(name, value);
  };
  const onSubmit = () => {
    navigate("/experience");
  };
  const renderErrors = () => {
    const errorComponents = [];
    if (errors.name) {
      errorComponents.push(<ErrorMsg name="name" txt="name" />);
    }
    if (errors.mail) {
      errorComponents.push(<ErrorMsg name="mail" txt="email address" />);
    }
    if (errors.mobile) {
      errorComponents.push(<ErrorMsg name="mobile" txt="mobile number" />);
    }
    if (errors.date) {
      errorComponents.push(<ErrorMsg name="date" txt="date" />);
    }
    return errorComponents;
  };
  return (
    <MainContainer>
      <div className="innerCont">
        <div>
          <Header>
            <img src={logo} alt="" />
          </Header>
          <ImageContainer>
            <Quotes>
              “When you see a good move,
              <br /> look for a better one.”
            </Quotes>
            <h2 className="author">-Emanuel Lasker</h2>
          </ImageContainer>
        </div>
        <RighdSide>
          <RightHeader />
          <SharedPageIndicator bgcolor={active} done={isDone} />
          <ErrorBox id="errorBox">{renderErrors()}</ErrorBox>
          <StyledPersonal>
            <h1>Personal information</h1>
            <p>This is basic informaton field</p>
          </StyledPersonal>
          <InputFieldCont onSubmit={handleSubmit(onSubmit)}>
            <InnerDiv
              style={{
                backgroundColor: errors.name
                  ? "rgba(220, 53, 69, 0.13)"
                  : "#FFFFFF",
              }}
            >
              <InputField
                style={{
                  color: errors.name
                    ? "rgba(220, 53, 69, 1)"
                    : "rgba(33, 37, 41, 1)",
                  backgroundColor: errors.name
                    ? "rgba(220, 53, 69, 0)"
                    : "#FFFFFF",
                }}
                className={errors.name ? "placeholder-red" : ""}
                placeholder="Name"
                type="text"
                maxLength={30}
                {...register("name", {
                  required: true,
                  minLength: 2,
                  maxLength: 30,
                })}
                onChange={(e) => {
                  onChange(e);
                  handleInputChangeForMandatoryFields(e);
                }}
                onBlur={(e) => {
                  onBlur(e);
                  saveToLocalStorage("name", e.target.value);
                }}
              />
              <span id="name" className="red-asterisk name">
                *
              </span>
              {isValid && <img src={validImage} alt="valid Icon" />}
            </InnerDiv>
            <InnerDiv
              style={{
                backgroundColor: errors.mail
                  ? "rgba(220, 53, 69, 0.13)"
                  : "#FFFFFF",
              }}
            >
              <InputField
                style={{
                  color: errors.mail
                    ? "rgba(220, 53, 69, 1)"
                    : "rgba(33, 37, 41, 1)",
                  backgroundColor: errors.mail
                    ? "rgba(220, 53, 69, 0)"
                    : "#FFFFFF",
                }}
                className={errors.name ? "placeholder-red" : ""}
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
                onChange={(e) => {
                  onChange(e);
                  handleInputChangeForMandatoryFields(e);
                }}
                onBlur={(e) => {
                  onBlur(e);
                  saveToLocalStorage("mail", e.target.value);
                }}
              />
              <span id="mail" className="red-asterisk mail">
                *
              </span>
              {isValid && <img src={validImage} alt="valid Icon" />}
            </InnerDiv>
            <InnerDiv
              style={{
                backgroundColor: errors.mobile
                  ? "rgba(220, 53, 69, 0.13)"
                  : "#FFFFFF",
              }}
            >
              <InputField
                style={{
                  color: errors.mobile
                    ? "rgba(220, 53, 69, 1)"
                    : "rgba(33, 37, 41, 1)",
                  backgroundColor: errors.mobile
                    ? "rgba(220, 53, 69, 0)"
                    : "#FFFFFF",
                }}
                className={errors.name ? "placeholder-red" : ""}
                placeholder="Mobile"
                type="text"
                maxLength={9}
                {...register("mobile", {
                  required: true,
                  minLength: 9,
                  maxLength: 9,
                  pattern: { value: /5[0-9]{8}/ },
                })}
                onChange={(e) => {
                  onChange(e);
                  handleInputChangeForMandatoryFields(e);
                }}
                onBlur={(e) => {
                  onBlur(e);
                  saveToLocalStorage("mobile", e.target.value);
                }}
              />
              <span id="mobile" className="red-asterisk mobile">
                *
              </span>
              {isValid && <img src={validImage} alt="valid Icon" />}
            </InnerDiv>
            <InnerDiv
              style={{
                backgroundColor: errors.date
                  ? "rgba(220, 53, 69, 0.13)"
                  : "#FFFFFF",
              }}
            >
              <Calendar
                style={{
                  color: errors.date
                    ? "rgba(220, 53, 69, 1)"
                    : "rgba(33, 37, 41, 1)",
                  backgroundColor: errors.date
                    ? "rgba(220, 53, 69, 0)"
                    : "#FFFFFF",
                }}
                className="custom-calendar"
                placeholder="Date of birth"
                type="date"
                value={selectedDate}
                onSelect={(e) => {
                  setSelectedDate(e.value);
                  hideDateasterisk();
                }}
                onFocus={(e) => e.target.blur()}
                {...register("date", {
                  required: true,
                })}
              />
              <span id="date" className="red-asterisk date">
                *
              </span>
              {isValid && <img src={validImage} alt="valid Icon" />}
            </InnerDiv>
            <div className="buttonContainer">
              <BackButton to={"/"}>Back</BackButton>
              <BlackButton>
                Next
                <img src={arrow} alt="arrow icon" />
              </BlackButton>
            </div>
          </InputFieldCont>
        </RighdSide>
      </div>
    </MainContainer>
  );
};
export default Personal;
const MainContainer = styled.div`
  overflow: hidden;
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
const ImageContainer = styled.div`
  width: 923px;
  height: 996px;
  background: url(${PersonalBG});
  background-size: cover;
  .author {
    color: #e5e6e8;
    font-size: 24px;
    font-family: Nunito;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    margin: 24px 132px;
  }
`;
const RighdSide = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputFieldCont = styled.form`
  .buttonContainer {
    display: flex;
    justify-content: space-between;
    width: 743px;
  }
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 85px 48px 88px 48px;
  margin: 0px;

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
  .custom-calendar {
    width: 100%;
  }
  .custom-calendar:focus {
    border: none;
    outline: none;
  }
  .custom-calendar input[type="text"],
  .custom-calendar .p-inputtext {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #212529;
    padding: 0px;
    outline: none;
    border: none;
    background-color: ${({ errors }) =>
      errors && errors.date ? "" : "rgba(220, 53, 69, 0)"};
  }
  .p-inputtext:focus {
    box-shadow: none;
  }
`;
const InnerDiv = styled.div`
  border-radius: 4px;
  position: relative;
  padding: 8px 20px 8px 16px;
  max-width: 743px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.125);
  .placeholder-red::placeholder {
    color: rgba(220, 53, 69, 1);
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
const ErrorBox = styled.div`
  position: relative;
  z-index: 1;
  top: 14px;
  left: 560px;
  height: 0px;
`;
