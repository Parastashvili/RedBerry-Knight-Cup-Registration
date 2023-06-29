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
  const [redberryChampionship, setRedberryChampionship] = useState(null);
  const [grandmasters, setGrandmasters] = useState([]);
  const {sendInfo , setSendInfo} = useState({}) ;

  const options = [
    { value: "Bigginer", label: "Bigginer" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Professional", label: "Professional" },
  ];

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
    localStorage.setItem(
      "characterName",
      JSON.stringify({
        value: selectedOption?.value,
        label: selectedOption?.label,
        image: selectedOption?.image,
      })
    );
  };
  
  

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

    const storedSelectedOption = localStorage.getItem("levelOfKnowladge");
    if (storedSelectedOption) {
      setSelectedOption(JSON.parse(storedSelectedOption));
    }

    const storedSelectedOption2 = localStorage.getItem("characterName");
    if (storedSelectedOption2) {
      setSelectedOption2(JSON.parse(storedSelectedOption2));
    }

    const savedValue = localStorage.getItem('redberryChampionship');
  if (savedValue !== null) {
    setRedberryChampionship(JSON.parse(savedValue));

    const storedSendInfo = localStorage.getItem("sendInfo");
    if (storedSendInfo) {
      setSendInfo(JSON.parse(storedSendInfo));
    }
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
    const dateObj = new Date(localStorage.getItem("date"));
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });


    const formData = new FormData();
    formData.append("name", localStorage.getItem("name"));
    formData.append("email", localStorage.getItem("mobile"));
    formData.append("phone", localStorage.getItem("mail"));
    formData.append("date_of_birth", formattedDate );
    formData.append("experience_level", JSON.parse(localStorage.getItem('levelOfKnowladge')).label);
    formData.append("already_participated",localStorage.getItem('redberryChampionship') === "true" );
    formData.append("character_id", Number(JSON.parse(localStorage.getItem('characterName')).value));
   console.log(formData.getAll("date_of_birth"))
    axios
      .post("https://chess-tournament-api.devtest.ge/api/register", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
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
              {...register("redberryChampionship", { required: true })}
              checked={redberryChampionship === true}
              onChange={() => {
                setRedberryChampionship(true);
                localStorage.setItem('redberryChampionship', JSON.stringify(true));
              }}
              />
              Yes
              <input
              type="radio"
              id="no"
              value="no"
              {...register("redberryChampionship", { required: true })}
              checked={redberryChampionship === false}
              onChange={() => {
                setRedberryChampionship(false);
                localStorage.setItem('redberryChampionship', JSON.stringify(false));
              }}
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
