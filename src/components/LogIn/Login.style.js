import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin: auto;
  height: 100vh;
  background-color: #dcebf7;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  padding: 24px;
  position: relative;
  width: 287px;
  /* height: 376px; */
  background-color: #ffffff;
  border-radius: 8px;

  @media (min-width: 768px) {
    margin-top: 174px;
    width: 400px;
    padding: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #3e85f3;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  text-align: left;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 14px;
  }
`;

export const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  height: 46px;
  border-radius: 8px;
  padding-left: 14px;
  border: 1px solid #dce3e5;
  &::placeholder {
    content: "";
    color: #dce3e5;
    font-size: 16px;
    line-height: 46px;
  }
  &.custom {
    &::placeholder {
      font-size: 30px;
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    height: 54px;
  }
`;

export const StyledInputP = styled.input`
  display: flex;
  justify-content: center;
  height: 46px;
  border-radius: 8px;
  padding-left: 14px;
  border: 1px solid #dce3e5;
  &::placeholder {
    content: "";
    position: absolute;
    top: 5px;
    bottom: 5px;
    color: #dce3e5;
    font-size: 32px;
    line-height: 46px;
  }

  @media (min-width: 768px) {
    height: 54px;
    &::placeholder {
      top: 10px;
      bottom: 5px;
    }
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  margin-top: 8px;
  border-radius: 16px;
  background-color: #3e85f3;
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: white;

  @media (min-width: 768px) {
    height: 56px;
    font-size: 18px;
  }
`;

export const Svg = styled.svg`
  /* width: 24px;
  height: 24px;
  fill: white; */
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export const StyleLink = styled(NavLink)`
  color: #3e85f3;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  top: 10px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  display: none;

  @media (min-width: 1200px) {
    position: fixed;
    top: 230px;
    margin-left: 950px;
    display: block;
    font-size: 18px;
  }
  background-color: transparent;
`;

export const Error = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: #3e85f3;
`;
