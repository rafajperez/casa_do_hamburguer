const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="placeholder:[#32343E] w-87.5 rounded-md bg-white py-2 text-xs text-[#32343E] outline-none"
    />
  );
};

export default Input;
