import styled from "styled-components"
import BackImg from "../components/BackImg"
import RightHeader from "../styled-components/RightHeader"
import StyledPersonal from "../styled-components/StyledPersonal"
import ShearPageIndicator from "../components/SharedPageIndicator"
import chessImg from "../assets/third.png"
import { useState , useEffect } from "react"
import Select from 'react-select';
import axios from "axios"

export default function Experience() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [grandmasters, setGrandmasters] = useState([]);

  const options = [
    { value: 'Bigginer', label: 'Bigginer' },
    { value: 'option2', label: 'Intermediate' },
    { value: 'option3', label: 'Professional' }
  ];

  const options2 = [
    { value: 'optionA', label: 'Option A' },
    { value: 'optionB', label: 'Option B' },
    { value: 'optionC', label: 'Option C' }
  ];

  const handleOptionChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  

  useEffect(() => {
    const fetchGrandmasters = async () => {
      try {
        const response = await axios.get('https://chess-tournament-api.devtest.ge/api/grandmasters');
        const data = response.data;
        const options = data.map(grandmaster => ({
          value: grandmaster.id,
          label: grandmaster.name
        }));
        setGrandmasters(options);
      } catch (error) {
        console.error('Error fetching grandmasters:', error);
      }
    };

    fetchGrandmasters();
  }, []);


  const handleOptionChange2 = selectedOption => {
    setSelectedOption2(selectedOption);
  };

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
    <div className="selectSection">
      <Select
      className="select"
        value={selectedOption}
        onChange={handleOptionChange}
        options={options}
        placeholder="level of knowledge *"
      />
       <Select
       className="select"
         value={selectedOption2}
        onChange={handleOptionChange2}
        options={grandmasters}
        placeholder="Choose your character *"
      />
    </div>
    </div>
    
    </ExperienceSection>
  )
}


const ExperienceSection = styled.div`
 display: flex;
 justify-content: flex-start;
 .selectSection {
  display: flex;
  gap: 23px;
  margin: 103px 0 0 54px;
 }
 .select {
  width: 357px;
  height: 30px;
 }
`
