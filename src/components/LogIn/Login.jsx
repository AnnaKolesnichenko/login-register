import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import elements from "../../images/elements.png";

import {
  Error,
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
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Невірний email адрес")
        .required("Обов'язкове поле"),
      password: Yup.string()
        .min(7, "Пароль мінімум 7 символів")
        .required("Обов'язкове поле"),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <Wrapper>
      <Image src={elements} alt="goose" />
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
          {formik.errors.email && formik.touched.email ? (
            <Error>{formik.errors.email}</Error>
          ) : null}
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
          {formik.errors.password && formik.touched.password ? (
            <Error>{formik.errors.password}</Error>
          ) : null}
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
    </Wrapper>
  );
};

export default Login;
