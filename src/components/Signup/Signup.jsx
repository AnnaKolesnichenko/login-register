import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 335px;
`;

const Form = styled.form`
  margin: auto;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

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
      <h2 className="title">Sign Up</h2>
      <Form onSubmit={formik.handleSubmit} className="form">
        <InputDiv>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </InputDiv>

        <InputDiv>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </InputDiv>

        <InputDiv>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </InputDiv>
      </Form>
      <button>Sign Up</button>
    </Wrapper>
  );
};

export default Signup;
