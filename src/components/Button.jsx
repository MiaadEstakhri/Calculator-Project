const Button = ({ item, onclick, className }) => {
  return (
    <button
      className={`${className} fs-2 border-0 fw-bold p-2 `}
      onclick={onclick}
    >
      {item}
    </button>
  );
};

export default Button;
