import {
  Error,
  About,
  Button,
  Container,
  Icon,
  Image,
  PlusContainer,
  Section,
  StyledForm,
  StyledInput,
  StyledLabel,
  Title,
  User,
  Wrapper,
  DateInput,
  TickIcon,
} from "./UserProfile.style";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import image from "../../images/avatar@2x.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
//import { BsFillPlusCircleFill } from "react-icons/bs";

const UserProfile = () => {
  const [startDate, setStartDate] = useState(new Date());

  const formik = useFormik({
    initialValues: {
      name: "Nadiia Doe",
      email: "nadiia@gmail.com",
      birthdate: "25/08/1995",
      phone: "38 (097) 256 34 77",
      skype: "Add a skype number",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Мінімум 2 символи")
        .required("Обов'язкове поле"),
      email: Yup.string()
        .email("Невірний email адрес")
        .required("Обов'язкове поле"),
      birthdate: Yup.date("Оберіть дату").required("Обов'язкове поле"),
      phone: Yup.number()
        .min(7, "Не менш ніж 7 символів")
        .required("Обов'язкове поле"),
      skype: Yup.string().optional(),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <Container>
      <Wrapper>
        <About>
          <Image src={image} alt="nadiia doe" />
          <PlusContainer>
            <Icon />
          </PlusContainer>
          <Title>Nadiia Doe</Title>
          <User>User</User>
        </About>
        <StyledForm onSubmit={formik.handleSubmit}>
          <div>
            <Section>
              <StyledLabel htmlFor="name">User Name</StyledLabel>
              <StyledInput
                type="text"
                id="name"
                name="name"
                placeholder="Nadiia Doe"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name ? (
                <Error>{formik.errors.name}</Error>
              ) : null}
            </Section>
            <Section>
              <StyledLabel htmlFor="birthdate">Birthday</StyledLabel>
              {/* <StyledInput
                type="date"
                name="birthdate"
                id="birthdate"
                placeholder="25/08/1995"
                value={formik.values.birthdate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              /> */}

              <DateInput
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                icon={<TickIcon />}
              />

              {formik.errors.birthdate && formik.touched.birthdate ? (
                <Error>{formik.errors.birthdate}</Error>
              ) : null}
            </Section>
            <Section>
              <StyledLabel htmlFor="email">Email</StyledLabel>
              <StyledInput
                type="email"
                name="email"
                id="email"
                placeholder="nadiia@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <Error>{formik.errors.email}</Error>
              ) : null}
            </Section>
          </div>
          <div>
            <Section>
              <StyledLabel htmlFor="phone">Phone</StyledLabel>
              <StyledInput
                type="phone"
                name="phone"
                id="phone"
                placeholder="38 (097) 256 34 77"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.phone && formik.touched.phone ? (
                <Error>{formik.errors.phone}</Error>
              ) : null}
            </Section>
            <Section>
              <StyledLabel htmlFor="skype">Skype</StyledLabel>
              <StyledInput
                type="text"
                name="skype"
                id="skype"
                placeholder="Add a skype number"
                value={formik.values.skype}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.skype && formik.touched.skype ? (
                <Error>{formik.errors.skype}</Error>
              ) : null}
            </Section>
          </div>
        </StyledForm>
        <Button type="button">Save Changes</Button>
      </Wrapper>
    </Container>
  );
};

export default UserProfile;
