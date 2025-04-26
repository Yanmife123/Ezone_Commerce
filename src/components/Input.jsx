const Input = (props) => {
  return (
    <div className={`${props.container}`}>
      <input
        type={props.type}
        name={props.name}
        className={`outline-none ${props.style}`}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
