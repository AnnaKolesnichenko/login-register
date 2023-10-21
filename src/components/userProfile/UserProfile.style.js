import styled from "styled-components";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DatePicker from "react-datepicker";

export const Container = styled.div`
  background-color: #f7f6f9;
  height: 100vh;
  padding-top: 95px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    padding-top: 64px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 38px;
  }

  @media (min-width: 1440px) {
    //padding-top: 64px;
    padding-bottom: 32px;
  }
`;

export const PlusContainer = styled.div`
  fill: blue;
  position: absolute;
  top: 25%;
  left: 52%;

  @media (min-width: 768px) {
    top: 67%;
  }

  @media (min-width: 1440px) {
    top: 70%;
  }
`;

export const Icon = styled(BsFillPlusCircleFill)`
  fill: #3e85f3;
  background-color: white;
  border-radius: 100px;
  width: 8px;
  height: 8px;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const TickIcon = styled(MdOutlineKeyboardArrowDown)`
  width: 18px;
  height: 18px;
  top: 3px;
  right: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 335px;

  /* padding-left: 18px;
  padding-right: 18px; */
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 16px;

  @media (min-width: 768px) {
    max-width: 704px;
  }

  @media (min-width: 1440px) {
    max-width: 1087px;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
`;

export const Image = styled.img`
  width: 72px;
  height: 72px;
  margin-top: -36px;
  margin-bottom: 18px;
  border-radius: 50px;

  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 14px;
    width: 124px;
    height: 124px;
  }

  @media (min-width: 1440px) {
    margin-top: 60px;
  }
`;

export const Title = styled.h1`
  color: #343434;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 4px;
  margin-top: 0;

  @media (min-width: 768px) {
    font-size: 17px;
    margin-bottom: 8px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const User = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: #343434;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Fields = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    /* margin-left: 175px;
    margin-bottom: 175px; */
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    //gap: 50px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;
  color: #111;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;

  @media (min-width: 768px) {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }
`;

export const StyledInput = styled.input`
  /* padding-top: 12px;
  padding-bottom: 12px;*/
  box-sizing: border-box;
  padding-left: 14px;
  padding-right: 14px;
  margin-bottom: 18px;
  height: 42px;
  width: 299px;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  font-weight: bold;
  &::placeholder {
    color: black;
    font-weight: bold;
    text-align: left;
  }

  @media (min-width: 768px) {
    margin-bottom: 24px;
    height: 46px;
    width: 354px;
  }
`;

export const DateInput = styled(DatePicker)`
  box-sizing: border-box;
  padding-left: 14px;
  padding-right: 14px;
  margin-bottom: 18px;
  height: 42px;
  width: 299px;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  font-weight: bold;
  &::placeholder {
    color: black;
    font-weight: bold;
    text-indent: 14px;
  }

  @media (min-width: 768px) {
    margin-bottom: 24px;
    height: 46px;
    width: 354px;
  }
`;

export const Button = styled.button`
  width: 195px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 22px;
  margin-bottom: 40px;
  border-radius: 16px;
  padding: 10px 20px;
  background: #3e85f3;
  border: none;
  color: white;

  @media (min-width: 768px) {
    margin-top: 16px;
    width: 262px;
    height: 48px;
  }
`;

export const Error = styled.div`
  margin-top: 0px;
  font-size: 12px;
  color: #3e85f3;
`;
