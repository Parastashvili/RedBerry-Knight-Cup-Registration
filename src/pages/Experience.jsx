import styled from "styled-components";
import RightHeader from "../styled-components/RightHeader";
import StyledPersonal from "../styled-components/StyledPersonal";
import ShearPageIndicator from "../components/SharedPageIndicator";
import Author from "../styled-components/Author";
import Quotes from "../styled-components/Quotes";
import { BlackButton, BackButton } from "../styled-components/StyledButtons";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router";
import logo from "../assets/Khight cup logo.svg";
import PersonalBG from "../assets/third.png";
import Header from "../styled-components/Header";
export default function Experience() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [redberryChampionship, setRedberryChampionship] = useState(null);
  const [active, setActive] = useState("active");
  const [isDone, setIsDone] = useState(true);
  const [grandmasters, setGrandmasters] = useState([]);
  const navigate = useNavigate();
  const options = [
    { value: "beginner", label: "Beginner" },
    { value: "normal", label: "Normal" },
    { value: "professional", label: "Professional" },
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
    const savedValue = localStorage.getItem("redberryChampionship");
    if (savedValue !== null) {
      setRedberryChampionship(JSON.parse(savedValue));
    }
  }, []);
  const CustomOption = ({ innerProps, label, data }) => (
    <div className="characterImgContainer" {...innerProps}>
      <div>{label}</div>
      <img src={data.image} alt={label} />
    </div>
  );
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const dateObj = new Date(localStorage.getItem("date"));
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("mail");
    const phone = localStorage.getItem("mobile");
    const date_of_birth = formattedDate;
    const experience_level = JSON.parse(
      localStorage.getItem("levelOfKnowladge")
    ).label.toLowerCase();
    const already_participated =
      localStorage.getItem("redberryChampionship") == "true";
    const character_id = Number(
      JSON.parse(localStorage.getItem("characterName")).value
    );
    axios
      .post("https://chess-tournament-api.devtest.ge/api/register", {
        name,
        email,
        phone,
        date_of_birth,
        experience_level,
        already_participated,
        character_id,
      })
      .then(() => {
        navigate("/completed");
        localStorage.clear();
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };
  return (
    <ExperienceSection>
      <div>
        <Header>
          <img src={logo} alt="" />
        </Header>
        <ImageContainer>
          <Quotes>
            “Many have become chess masters;
            <br /> no one has become the master of chess.”
          </Quotes>
          <Author>- Siegbert Tarrasch</Author>
        </ImageContainer>
      </div>
      <div className="rightCont">
        <RightHeader>
          First step is done, continue to finish onboarding
        </RightHeader>
        <ShearPageIndicator
          bgcolor={active}
          done={isDone}
          bgcolor2={"active2"}
          done2={false}
        />
        <StyledPersonal>
          <h1>Chess experience</h1>
          <p>This is basic informaton fields</p>
        </StyledPersonal>
        <SelectForm onSubmit={handleSubmit(onSubmit)}>
          <div className="wrapper">
            <Select
              className="select"
              value={
                selectedOption ||
                JSON.parse(localStorage.getItem("levelOfKnowladge"))
              }
              onChange={handleOptionChange}
              options={options}
              placeholder="level of knowledge *"
              required
            />
            <Select
              className="select"
              value={
                selectedOption2 ||
                JSON.parse(localStorage.getItem("characterName"))
              }
              onChange={handleOptionChange2}
              options={grandmasters}
              components={{ Option: CustomOption }}
              placeholder="Choose your character *"
              required
            />
          </div>
          <label>
            Have you participated in the Redberry Championship?<span>*</span>
          </label>
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
                  localStorage.setItem(
                    "redberryChampionship",
                    JSON.stringify(true)
                  );
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
                  localStorage.setItem(
                    "redberryChampionship",
                    JSON.stringify(false)
                  );
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
const ExperienceSection = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  .rightCont{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: -200px;
  }
`;
const SelectForm = styled.form`
  margin: 103px 0 0 54px;
  .wrapper {
    display: flex;
    gap: 23px;
    margin-bottom: 96px;
  }
  .select {
    width: 392px;
    height: 30px;
    color: #212529;
    font-size: 20px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
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
  label {
    color: #212529;
    font-size: 20px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  span {
    color: #dc3545;
    margin-left: 4px;
  }
  .inputs {
    display: flex;
    gap: 16px;
    margin-top: 20px;
  }
  .inputBox {
    display: flex;
    gap: 8px;
    font-size: 16px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: #212529;
  }
  .buttons {
    display: flex;
    gap: 645px;
    margin-top: 120px;
  }
`;
