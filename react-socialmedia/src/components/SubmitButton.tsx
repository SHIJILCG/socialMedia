type SubmitButtonPropsType={
    css:string
}
export const SubmitButton = ({css}:SubmitButtonPropsType) => {
  return (
    <button
      type="submit"
      className={`font-bold  text-white py-[10px] active:scale-95 ${css}`}
    >
      Submit
    </button>
  );
};
