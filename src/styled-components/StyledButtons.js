import styled from "styled-components";
import { Link } from "react-router-dom";

const BlackButton = styled.button`
  background: #212529;
  border-radius: 8px;
  padding: 13px 24px;
  border: none;
  cursor: pointer;
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
  padding: 13px 24px;
  cursor: pointer;
  text-decoration: none;
  :hover {
    border: 1px solid rgba(194, 165, 249, 0.8);
    background: rgba(185, 180, 195, 0.3);
  }
`;

export  {BlackButton , BackButton};
