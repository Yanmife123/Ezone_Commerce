const Input = (props) => {
  return (
    <div className={`${props.container}`}>
      <input
        type={props.type}
        name={props.name}
        className={`outline-none ${props.style}`}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.Onchange}
      />
      <p className="text-crimson text-sm font-poppins px-2 py-1">
        {props.error}
      </p>
    </div>
  );
};

export default Input;
