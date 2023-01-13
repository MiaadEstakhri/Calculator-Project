const Button = ({ item, onclick, className,value }) => {
  return (
    <button
      className={`${className} fs-2 border-0 fw-bold p-2 `}
      onClick={onclick}
      value={value}
    >
      {item}
    </button>
  );
};

export default Button;
