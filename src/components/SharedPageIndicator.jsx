import React from "react";
import styled from "styled-components";
import check from "../assets/okok.png";
export default function SharedPageIndicator(props) {
  return (
    <div>
      <SharedComponent>
        <div className="topContainer">
          <PageIndicator1
            style={
              props.bgcolor === "active"
                ? { background: "#E9FAF1" }
                : { background: "#ffffff" }
            }
          >
            {props.done == true ? (
              <img src={check} alt="check sign" />
            ) : (
              <p>1</p>
            )}
          </PageIndicator1>
          <div className="divider"></div>
          <PageIndicator2
            style={
              props.bgcolor2 === "active2"
                ? { background: "#E9FAF1" }
                : { background: "#ffffff" }
            }
          >
            {props.done2 == true ? (
              <img src={check} alt="check sign" />
            ) : (
              <p>2</p>
            )}
          </PageIndicator2>
        </div>
        <div className="bottomContainer">
          <p>Personal information</p> <p>Chess experience</p>
        </div>
      </SharedComponent>
    </div>
  );
}
const SharedComponent = styled.div`
  width: 366px;
  height: 65px;
  margin: 60px 48px 0px;
  .topContainer {
    display: flex;
    justify-content: center;
    gap: 4px;
    align-items: center;
  }
  .divider {
    border: 1px solid rgba(185, 180, 196, 0.3);
    width: 200px;
  }
  .bottomContainer {
    display: flex;
    justify-content: space-between;
    p {
      margin: 4px 0px;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #000000;
    }
  }
`;
const PageIndicator1 = styled.div`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e5e6e8;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #212529;
`;
const PageIndicator2 = styled(PageIndicator1)`
  background: #f5f5f5;
  color: #95939a;
`;
