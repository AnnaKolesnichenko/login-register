import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import tabletGoose from "../../images/signUpElement.png";

import {
  Image,
  StyledForm,
  Wrapper,
  InputDiv,
  StyledLabel,
  Title,
  StyledInput,
  StyledButton,
  StyleLink,
  Svg,
} from "./Signup.style";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <Wrapper>
      <Image src={tabletGoose} alt="goose with tablet" />
      <StyledForm onSubmit={formik.handleSubmit} className="form">
        <Title className="title">Sign Up</Title>
        <InputDiv>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </InputDiv>

        <InputDiv>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </InputDiv>

        <InputDiv>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            type="text"
            id="password"
            name="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </InputDiv>
        <StyledButton>
          Sign Up
          <Svg>
            <use href="../../images/symbol-defs.svg#icon-Icon"></use>
          </Svg>
        </StyledButton>
      </StyledForm>
      <StyleLink
        to="/login"
        // style={{
        //   color: "#3e85f3",
        //   fontSize: "12px",
        //   fontWeight: "bold",
        //   position: "absolute",
        //   bottom: "110px",
        // }}
      >
        Log In
      </StyleLink>
    </Wrapper>
  );
};

export default Signup;
