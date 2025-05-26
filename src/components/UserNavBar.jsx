import { Link, useNavigate } from "react-router-dom";

import { data, Images } from "../constant";
import { Logout } from "../lib";

const UserLink = ({ icon, text, dir }) => {
  return (
    <li>
      <Link to={dir}>
        <div className="flex gap-3 items-center">
          <img src={icon} alt={text} />
          <div className="text-white text-sm">{text}</div>
        </div>
      </Link>
    </li>
  );
};

const UserNavBar = (props) => {
  const redirect = useNavigate();
 
  return (
    <div className="userNav userNav__Opening ">
      <ul className="flex gap-5 flex-col list-none">
        {data.UserNav.map((link) => (
          <UserLink key={link.id} {...link} />
        ))}
        <li onClick={props.logout} className="btn">
          <div className="flex gap-3 items-center">
            <img src={Images.iconLogout} alt={"logoutIcon"} />
            <div className="text-white text-sm">Logout</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserNavBar;
