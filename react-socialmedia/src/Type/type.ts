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
  setisNewPost: React.Dispatch<React.SetStateAction<boolean>>;
  users: UserDetailsType[];
  currentUser: UserDetailsType;
  setcurrentUser: React.Dispatch<React.SetStateAction<UserDetailsType>>;
};
