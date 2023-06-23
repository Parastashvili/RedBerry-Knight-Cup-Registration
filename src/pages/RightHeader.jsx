import React from "react";
import styled from "styled-components";
export default function RightHeader() {
  return (
    <div>
      <StyledRightHeader>Start creating your account</StyledRightHeader>;
    </div>
  );
}
const StyledRightHeader = styled.div`
  display: flex;
  align-items: center;
  width: 863px;
  height: 84px;
  width: 949px;
  background-color: transparent;
  padding: 0px 48px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-transform: capitalize;
  color: #212529;
  border-bottom: 1px solid rgba(185, 180, 196, 0.3);
`;
