import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import goose from "../../images/goose.png";
import elements from "../../images/elements.png";

import {
  StyledForm,
  Wrapper,
  InputDiv,
  StyledLabel,
  Title,
  StyledInput,
  StyledInputP,
  StyledButton,
  StyleLink,
  Svg,
  Image,
} from "./Login.style";

const Login = () => {
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
      <StyledForm onSubmit={formik.handleSubmit}>
        <Title className="title">Log In</Title>

        <InputDiv>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            name="email"
            placeholder="nadiia@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </InputDiv>

        <InputDiv>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInputP
            type="text"
            id="password"
            name="password"
            placeholder="• • • • • • •"
            className="custom"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </InputDiv>
        <StyledButton>
          Log In
          <Svg>
            <use href="../../images/symbol-defs.svg#icon-Icon"></use>
          </Svg>
        </StyledButton>
      </StyledForm>
      <StyleLink
        to="/"
        // style={{
        //   color: "#3e85f3",
        //   fontSize: "12px",
        //   fontWeight: "bold",
        //   position: "absolute",
        //   bottom: "150px",
        // }}
      >
        Sign Up
      </StyleLink>
      <Image src={elements} alt="goose" />
    </Wrapper>
  );
};

export default Login;
