import { FormikNewUserType, UserDetailsType } from "../Type/type";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSetUser } from "../api/users/useSetUser";
import { BackButtonCommon } from "./BackButtonCommon";
import { SubmitButton } from "./SubmitButton";

const initialValues: FormikNewUserType = {
  name: "",
  email: "",
  gender: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().email("Invalid email format").required("required"),
  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Invalid gender")
    .required("required"),
});
type AddNewUserType = {
  SetisNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddNewUser = ({ SetisNewUser }: AddNewUserType) => {
  const { mutate } = useSetUser();
  const onSubmit = (values: FormikNewUserType) => {
    const UsrId = new Date().getSeconds();
    mutate({
      ...values,
      id: UsrId,
      status: "active",
    } as UserDetailsType);
    SetisNewUser(false);
  };
  return (
    <div className="py-[40px] px-[100px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed pointer-events-auto bg-[#90b3c7] z-20 flex flex-col items-center rounded-md ">
      <div className="w-[100%] flex items-start">
       <BackButtonCommon  SetisNewUser={SetisNewUser}/>
      </div>
      <div className="flex flex-col items-center p-[10px] m-[15px]">
        <img
          src="https://www.vcqru.com/NewContent/front-assets/img/user.png"
          alt=""
          className="w-[250px]"
        />
        <span className="text-[30px] uppercase text-[#000] ">
          Create New account
        </span>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col gap-[10px] w-[100%]">
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
           <SubmitButton css='bg-[#386E92] rounded-md' />
        </Form>
      </Formik>
    </div>
  );
};
