import { Link } from "react-router-dom";

const AdvertLink = (props) => {
  return (
    <Link
      to={props.link}
      className="text-white font-poppins relative md:text-base text-[13px] before:absolute before:w-full before:h-[1px] before:bg-white before:bottom-[-2px]"
    >
      Shop Now
    </Link>
  );
};

export default AdvertLink;
