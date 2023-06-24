interface ButtonProps {
  text: string;
  onClick?: VoidFunction;
  style?: string;
}

export const CustomButton = ({ text, onClick, style }: ButtonProps) => {
  return (
    <input
      type="button"
      className={`bg-blue-700 p-2 text-xs rounded text-white hover:bg-blue-500 hover:cursor-pointer ${style}`}
      onClick={onClick}
      value={text}
    />
  );
};
