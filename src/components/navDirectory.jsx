import { Link } from "react-router-dom";

const NavigationS = ({ link_dir, hidden, color, name }) => {
  return (
    <div className="flex gap-3">
      <Link to={link_dir} className={`capitalize ${color}`}>
        {name}
      </Link>
      <div className={`${hidden} text-grey`}> / </div>
    </div>
  );
};

export default NavigationS;
