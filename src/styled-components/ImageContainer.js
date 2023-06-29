import styled from "styled-components";
import PersonalBG from "../assets/second.png";
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
export default ImageContainer;
