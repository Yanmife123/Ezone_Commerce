import { Link } from "react-router-dom";

const NavigationS = ({ link_dir, hidden, color, index }) => {
  return (
    <div className="flex gap-3">
      <Link to={index === 0 ? "/" : link_dir} className={`capitalize ${color}`}>
        {link_dir}
      </Link>
      <div className={`${hidden} text-grey`}> / </div>
    </div>
  );
};

export default NavigationS;
