import { Formik } from "formik";

export type UserDetailsType = {
  id: number;
  name: string;
  email: string;
  gender: "female" | "male";
  status: "active" | "inactive";
};

export type PostDetailsType = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type PostDetailsArrayType = {
  id: number;
  user_id: number;
  title: string;
  body: string;
}[];
export type CommentsDetailsType = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};
export type ContextType = {
  setshowNewPostContainer: React.Dispatch<React.SetStateAction<boolean>>;
  setshowNewUserContainer: React.Dispatch<React.SetStateAction<boolean>>;
};

export type gender ="male" | "female";
export type stat = "active" | "inactive"


export type FormikNewUserType={
   name:string
   email:string
   gender:string
}