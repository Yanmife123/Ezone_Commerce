import { Link } from "react-router-dom";

const BtnLink = (props) => {
  return (
    <div>
      <Link
        to={props.location}
        className={`font-alt bg-crimson text-white text-[15px] py-4 px-12 rounded-[4px]  ${
          props.style ?? ""
        } `}
      >
        {props.text}
      </Link>
    </div>
  );
};

export default BtnLink;
