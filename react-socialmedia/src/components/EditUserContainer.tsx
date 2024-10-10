import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import useEditUser from "../api/users/useEditUser";
import { FormikNewUserType, UserDetailsType } from "../Type/type";
import { BackButtonCommon } from "./BackButtonCommon";
import { SubmitButton } from "./SubmitButton";

const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().email("Invalid email format").required("required"),
  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Invalid gender")
    .required("required"),
});
type EditUserType = {
  UserDetails: UserDetailsType;
  setisEditUsre: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditUserContainer = ({
  UserDetails,
  setisEditUsre,
}: EditUserType) => {
  const { mutate } = useEditUser();
  const initialValues: FormikNewUserType = {
    name: UserDetails.name,
    email: UserDetails.email,
    gender: UserDetails.gender,
  };
  const onSubmit = (values: FormikNewUserType) => {
    mutate({
      ...values,
      id: UserDetails.id,
      status: "active",
    } as UserDetailsType);
    setisEditUsre(false);
  };
  return (
    <div className=" absolute z-20 bg-white p-[30px] w-[600px] max-w-[600px] rounded-lg pointer-events-auto">
      <div className="flex w-[100%] items-center">
        <BackButtonCommon setisEditUsre={setisEditUsre} />
        <span className="text-[30px] font-bold p-[10px]  m-[10px]">
          Edit User Details
        </span>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col gap-[10px] w-[100%] mt-[10px]">
          <div className="flex flex-col">
            <div className="flex justify-start w-[100%]">
              <label htmlFor="name" className="text-[20px] w-[20%] ">
                Name:
              </label>
              <Field
                id="name"
                name="name"
                placeholder="Enter Name..."
                className="border-2 border-[#bdbdbd] rounded-lg px-[5px] w-[80%]   py-[10px]"
              />
            </div>
            <ErrorMessage name="name" />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-start">
              <label htmlFor="name" className="text-[20px]  w-[20%]">
                Email:
              </label>
              <Field
                type="text"
                placeholder="Enter Email.."
                id="email"
                name="email"
                className="border-2 border-[#bdbdbd] rounded-lg px-[5px] w-[80%]   py-[10px]"
              />
            </div>
            <ErrorMessage name="email" />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-start">
              <label htmlFor="gender" className="text-[20px] w-[20%]">
                Gender:
              </label>
              <Field
                type="text"
                placeholder="Enter gender..."
                id="gender"
                name="gender"
                className="border-2 border-[#bdbdbd] rounded-lg px-[5px] w-[80%]  py-[10px]"
              />
            </div>
            <ErrorMessage name="gender" />
          </div>
           <SubmitButton css="w-[80%] bg-blue-400 mx-auto rounded-md"/>
        </Form>
      </Formik>
    </div>
  );
};
