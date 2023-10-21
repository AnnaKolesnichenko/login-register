import {
  Error,
  About,
  Button,
  Container,
  Fields,
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
//import { useSelector } from "react-redux";
//import { BsFillPlusCircleFill } from "react-icons/bs";

const UserProfile = () => {
  const [startDate, setStartDate] = useState(new Date());
  //const userData = useSelector((state) => state.auth.user);

  const formik = useFormik({
    initialValues: {
      avatar: "",
      name: "",
      email: "",
      birthdate: "",
      phone: "",
      skype: "",
    },
    validationSchema: Yup.object({
      avatar: Yup.mixed()
        .test("isFile", "Невірний тип файлу", (value) => {
          if (!value) {
            return true;
          }
          return value instanceof File;
        })
        .required("Оберіть файл"),
      name: Yup.string()
        .min(2, "Мінімум 2 символи")
        .max(16, "Максимум 16 символів")
        .required("Обов'язкове поле"),
      email: Yup.string()
        .email("Невірний email адрес")
        .required("Обов'язкове поле"),
      birthdate: Yup.date("Оберіть дату").required("Обов'язкове поле"),
      phone: Yup.number()
        .min(7, "Не менш ніж 7 символів")
        .required("Обов'язкове поле"),
      skype: Yup.string().max(16).optional(),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <Container>
      <Wrapper>
        <StyledForm onSubmit={formik.handleSubmit}>
          <>
            <Section>
              <label htmlFor="file">
                <About>
                  <Image src={image} alt="nadiia doe" />
                  <PlusContainer>
                    <Icon />
                  </PlusContainer>
                  <Title>Nadiia Doe</Title>
                  <User>User</User>
                </About>
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".jpg, .jpeg, .png, .gif"
                style={{ display: "none" }}
              />
            </Section>
          </>
          <Fields>
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
          </Fields>
        </StyledForm>
        <Button type="button">Save Changes</Button>
      </Wrapper>
    </Container>
  );
};

export default UserProfile;
