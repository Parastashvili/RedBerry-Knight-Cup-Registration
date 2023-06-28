import styled from "styled-components";
import BackImg from "../components/BackImg";
import RightHeader from "../styled-components/RightHeader";
import StyledPersonal from "../styled-components/StyledPersonal";
import ShearPageIndicator from "../components/SharedPageIndicator";
import chessImg from "../assets/third.png";
import {BlackButton , BackButton} from "../styled-components/StyledButtons"
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import axios from "axios";

export default function Experience() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [grandmasters, setGrandmasters] = useState([]);

  const options = [
    { value: "Bigginer", label: "Bigginer" },
    { value: "option2", label: "Intermediate" },
    { value: "option3", label: "Professional" },
  ];

  // const handleOptionChange = (selectedOption) => {
  //   setSelectedOption(selectedOption);
  //   localStorage.setItem("levelOfKnowladge", JSON.stringify(selectedOption.label));
  // };

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    localStorage.setItem(
      "levelOfKnowladge",
      JSON.stringify({
        label: selectedOption?.label,
      })
    );
  };
  

  const handleOptionChange2 = (selectedOption) => {
    setSelectedOption2(selectedOption);
    localStorage.setItem("characterName", JSON.stringify(selectedOption.label));
    localStorage.setItem("characterImg", JSON.stringify(selectedOption.image));
  };

  // const handleOptionChange2 = (selectedOption) => {
  //   setSelectedOption2(selectedOption);
  //   localStorage.setItem(
  //     "characterName",
  //     JSON.stringify({
  //       value: selectedOption?.value,
  //       label: selectedOption?.label,
  //       image: selectedOption?.image,
  //     })
  //   );
  // };
  
  

  useEffect(() => {
    const fetchGrandmasters = async () => {
      try {
        const response = await axios.get(
          "https://chess-tournament-api.devtest.ge/api/grandmasters"
        );
        const data = response.data;
        const options = data.map((grandmaster) => ({
          value: grandmaster.id,
          label: grandmaster.name,
          image: grandmaster.image,
        }));
        setGrandmasters(options);
      } catch (error) {
        console.error("Error fetching grandmasters:", error);
      }
    };

    fetchGrandmasters();

    const storedSelectedOption = localStorage.getItem("characterName");
    if (storedSelectedOption) {
      setSelectedOption(JSON.parse(storedSelectedOption));
    }

    const storedSelectedOption2 = localStorage.getItem("characterImg");
    if (storedSelectedOption2) {
      setSelectedOption2(JSON.parse(storedSelectedOption2));
    }
  }, []);

 

  const CustomOption = ({ innerProps, label, data }) => (
    <div className="characterImgContainer" {...innerProps}>
      <div>{label}</div>
      <img src={data.image} alt={label} />
    </div>
  );

  const { register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log("sssssss");
  };

   
  return (
    <ExperienceSection>
      <BackImg background={chessImg} />
      <div>
        <RightHeader>
          First step is done, continue to finish onboarding
        </RightHeader>
        <ShearPageIndicator />
        <StyledPersonal>
          <h1>Chess experience</h1>
          <p>This is basic informaton fields</p>
        </StyledPersonal>
        <SelectForm onSubmit={handleSubmit(onSubmit)}>
          <div className="wrapper">
            <Select
              className="select"
              value={selectedOption || JSON.parse(localStorage.getItem("levelOfKnowladge"))}
              onChange={handleOptionChange}
              options={options}
              placeholder="level of knowledge *"
              required
            />
            <Select
              className="select"
              value={selectedOption2 || JSON.parse(localStorage.getItem("characterName"))}
              onChange={handleOptionChange2}
              options={grandmasters}
              components={{ Option: CustomOption }}
              placeholder="Choose your character *"
              required
            />
          </div>
          <label>Have you participated in the Redberry Championship?</label>
          <div className="inputs">
            <div className="inputBox">
              <input
                type="radio"
                id="yes"
                value="yes"
                {...register("redberryChampionship" , {required : true})}
              />
              Yes
            </div>
            <div className="inputBox">
              <input
                type="radio"
                id="no"
                value="no"
                {...register("redberryChampionship" , {required : true})}
              />
              No
            </div>
          </div>
          <div className="buttons">
            <BackButton to={"/personal"}>Back</BackButton>
            <BlackButton>Done</BlackButton>
          </div>
        </SelectForm>
      </div>
    </ExperienceSection>
  );
}

const ExperienceSection = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  
`;
const SelectForm = styled.form`
  margin: 103px 0 0 54px;
  .wrapper {
    display: flex;
    gap: 23px;
    margin-bottom: 96px;
  }
  .select {
    width: 357px;
    height: 30px;
  }
  .characterImgContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 20px;
  }
  .characterImgContainer img {
    width: 100px;
    height: 72px;
    margin-bottom: 10px;
  }
  .inputs {
    display: flex;
    gap: 16px;
    margin-top: 20px;
  }
  .inputBox {
    display: flex;
    gap: 8px;
  }
  .buttons {
    margin-top: 174px;
  }
`;
