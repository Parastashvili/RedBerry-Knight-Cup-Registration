import React, { useEffect, useState } from "react";
import styled from "styled-components";
import errorImage from "../assets/Mark.png";

export default function ErrorMsg(props) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <Error isVisible={isVisible}>
      <div className="inner">
        <div className="first">
          <img src={errorImage} alt="error Icon" />
          <p>Invalid {props.name}</p>
        </div>
        <div className="second">
          <button onClick={handleClose}>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="x">
                <path
                  id="Vector"
                  d="M6.67844 6.67863C6.74521 6.61169 6.82453 6.55859 6.91185 6.52235C6.99917 6.48612 7.09278 6.46747 7.18732 6.46747C7.28186 6.46747 7.37547 6.48612 7.46279 6.52235C7.55011 6.55859 7.62943 6.61169 7.69619 6.67863L11.4998 10.4837L15.3034 6.67863C15.3703 6.6118 15.4496 6.55879 15.5369 6.52263C15.6242 6.48646 15.7178 6.46784 15.8123 6.46784C15.9068 6.46784 16.0004 6.48646 16.0877 6.52263C16.175 6.55879 16.2544 6.6118 16.3212 6.67863C16.388 6.74545 16.441 6.82479 16.4772 6.9121C16.5134 6.99941 16.532 7.093 16.532 7.1875C16.532 7.28201 16.5134 7.37559 16.4772 7.4629C16.441 7.55022 16.388 7.62955 16.3212 7.69638L12.5161 11.5L16.3212 15.3036C16.388 15.3705 16.441 15.4498 16.4772 15.5371C16.5134 15.6244 16.532 15.718 16.532 15.8125C16.532 15.907 16.5134 16.0006 16.4772 16.0879C16.441 16.1752 16.388 16.2546 16.3212 16.3214C16.2544 16.3882 16.175 16.4412 16.0877 16.4774C16.0004 16.5135 15.9068 16.5322 15.8123 16.5322C15.7178 16.5322 15.6242 16.5135 15.5369 16.4774C15.4496 16.4412 15.3703 16.3882 15.3034 16.3214L11.4998 12.5163L7.69619 16.3214C7.62937 16.3882 7.55003 16.4412 7.46272 16.4774C7.37541 16.5135 7.28183 16.5322 7.18732 16.5322C7.09281 16.5322 6.99923 16.5135 6.91192 16.4774C6.82461 16.4412 6.74527 16.3882 6.67844 16.3214C6.61162 16.2546 6.55861 16.1752 6.52244 16.0879C6.48628 16.0006 6.46766 15.907 6.46766 15.8125C6.46766 15.718 6.48628 15.6244 6.52244 15.5371C6.55861 15.4498 6.61162 15.3705 6.67844 15.3036L10.4835 11.5L6.67844 7.69638C6.61151 7.62961 6.5584 7.5503 6.52217 7.46298C6.48594 7.37566 6.46729 7.28204 6.46729 7.1875C6.46729 7.09296 6.48594 6.99935 6.52217 6.91203C6.5584 6.82471 6.61151 6.74539 6.67844 6.67863Z"
                  fill="#95939A"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="inner2">
        <p>Please enter valid {props.txt}</p>
      </div>
    </Error>
  );
}

const Error = styled.div`
  user-select: none;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
  width: 350px;
  height: 87px;
  overflow: hidden;
  @keyframes appearAnimation {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(-20px)"};
  animation: ${({ isVisible }) =>
    isVisible ? `appearAnimation 0.3s ease-in-out` : "none"};
  .inner {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px 6px 8px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .first {
      display: flex;
      gap: 8px;
      align-items: center;

      p {
        color: #dc3545;
        font-size: 14px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        line-height: 21px;
      }
    }
    .second {
      button {
        cursor: pointer;
        width: 23px;
        height: 23px;
        background-color: transparent;
        border: none;
        :hover {
          opacity: 0.5;
        }
      }
    }
  }

  .inner2 {
    padding: 12px;

    p {
      color: #212529;
      font-size: 16px;
      font-family: Open Sans;
      line-height: 150%;
    }
  }
`;
