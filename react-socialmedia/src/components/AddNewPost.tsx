import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useSetPosts } from "../api/posts/useSetPosts";
import { PostDetailsType } from "../Type/type";
import { BackButtonCommon } from "./BackButtonCommon";
import { SubmitButton } from "./SubmitButton";
type AddNewPostProsType = {
  currentUserId: number;
  setshowNewPost: React.Dispatch<React.SetStateAction<boolean>>;
};
const initialValue = {
  title: "",
  body: "",
};
const validationSchema = Yup.object({
  title: Yup.string().required("required"),
  body: Yup.string().required("required"),
});

export const AddNewPost = ({
  currentUserId,
  setshowNewPost,
}: AddNewPostProsType) => {
  const { mutate } = useSetPosts();
  const onSubmit = (values: { title: string; body: string }) => {
    const postId = new Date().getSeconds();
    mutate({
      ...values,
      user_id: currentUserId,
      id: postId,
    } as PostDetailsType);
    setshowNewPost(false);
  };
  return (
    <div className="fixed top-[200px] left-[50%] translate-x-[-50%] w-[700px] h-[350px] bg-[#bbdbf0] shadow-2xl p-[20px] flex flex-col justify-between pointer-events-auto">
      <div className="flex justify-between">
        <BackButtonCommon setShowNewPost={setshowNewPost} />
        <h2 className=" font-bold text-[30px] text-[#3c8eda]">New Post</h2>
        <div></div>
      </div>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex-1">
          <div className="flex-col flex p-[30px] h-[100%] justify-between">
            <div className="flex flex-col text-start w-[100%]">
              <div className="flex w-[100%] gap-2">
                <label htmlFor="title" className="text-[20px] font-bold text-[#3c8eda]">
                  Title:
                </label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Write a title...."
                  className="w-[100%] focus:outline-none focus:border-none text-[20px]  bg-transparent placeholder:text-black"
                />
              </div>
              <ErrorMessage name="title" />
            </div>
            <div className="flex flex-col text-start w-[100%]">
              <div className="flex w-[100%] gap-2">
                <label htmlFor="body" className="text-[20px] font-bold text-[#3c8eda]">
                  Body:
                </label>
                <Field
                  as="textarea"
                  id="body"
                  name="body"
                  placeholder="Write a body...."
                  className=" w-[100%] focus:outline-none focus:border-none text-[20px]  bg-transparent placeholder:text-black"
                />
              </div>
              <ErrorMessage name="body" />
            </div>
             <SubmitButton css="bg-blue-400 rounded-md" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
