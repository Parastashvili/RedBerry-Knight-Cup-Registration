import styled from "styled-components"
import BackImg from "../components/BackImg"
import RightHeader from "../styled-components/RightHeader"
import StyledPersonal from "../styled-components/StyledPersonal"
import ShearPageIndicator from "../components/SharedPageIndicator"
import chessImg from "../assets/third.png"

export default function Experience() {
  return(
    <ExperienceSection>
    <BackImg background={chessImg} />
    <div>
    <RightHeader>First step is done, continue to finish onboarding</RightHeader>
    <ShearPageIndicator />
    <StyledPersonal>
      <h1>Chess experience</h1>
      <p>This is basic informaton fields</p>
    </StyledPersonal>
    </div>
    
    </ExperienceSection>
  )
}


const ExperienceSection = styled.div`
 display: flex;
 justify-content: flex-start;
`
