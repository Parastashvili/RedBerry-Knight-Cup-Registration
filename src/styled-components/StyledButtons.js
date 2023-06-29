import styled from "styled-components";
import { Link } from "react-router-dom";

const BlackButton = styled.button`
  margin-top: -4px;
  background: #212529;
  border-radius: 8px;
  padding: 0px 24px;
  height: 61px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 4px solid #ffffff;
  :hover {
    border: 4px solid rgba(194, 165, 249, 0.8);
  }
`;
const BackButton = styled(Link)`
  border: 1px solid #212529;
  border-radius: 8px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-transform: capitalize;
  color: #212529;
  width: 73px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  :hover {
    border: 1px solid rgba(194, 165, 249, 0.8);
    background: rgba(185, 180, 195, 0.3);
  }
`;

export { BlackButton, BackButton };
