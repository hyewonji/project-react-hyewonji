import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const Main = styled.div`
  margin-top: 70px;
  width: 90vw;
  height: 85vh;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const CitySearchWrapper = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px 0 0 20px;
  background: white;
  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

const SearchCityForm = styled.div`
  position: relative;
  width: 80%;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 80%;
  padding: 1.5rem;
  border-radius: 3rem;
  outline: none;
  border: none;
  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
  font-size: 1rem;
  color: #131f69;
  text-transform: uppercase;
`;

const SubmitBtn = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -0.35rem;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  outline: none;
  border: none;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
  color: white;
  background-color: #31feae;
  font-size: 50px;
`;

const CurrentWeatherWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 20px 20px 0;
  color: white;
  background: gray;
  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 20px 20px;
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

const Date = styled.div`
  font-size: 20px;
`;

const WeatherCard = styled.div`
  width: 100px;
  height: 100px;
  background-size: contain;
`;

const Temperature = styled.div`
  font-size: 70px;
`;

const City = styled.div`
  font-size: 28px;
`;

const Description = styled.div`
  font-size: 15px;
`;

function AddCurrent({ onSubmit, onChange, cityWeather, weatherCard }) {
  const today = new window.Date();
  const dateString = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  return (
    <Main>
      <CitySearchWrapper>
        <SearchCityForm onSubmit={onSubmit}>
          <Input placeholder="SEARCH CITY" onChange={onChange}></Input>
          <SubmitBtn onClick={onSubmit}>
            <AiOutlineSearch ></AiOutlineSearch>
          </SubmitBtn>
        </SearchCityForm>
      </CitySearchWrapper>

      <CurrentWeatherWrapper >
        <Title>Here We Are!</Title>
        <Date>{dateString}</Date>
        <WeatherCard>{weatherCard}</WeatherCard>
        <Temperature>{cityWeather.temp}°</Temperature>
        <City>{cityWeather.city}</City>
        {cityWeather.main}
        <Description></Description>
      </CurrentWeatherWrapper>
    </Main>
  );
}

export default AddCurrent;
