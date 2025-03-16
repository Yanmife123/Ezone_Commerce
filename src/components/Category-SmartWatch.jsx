import { useState } from "react";

const Cat_SmartWatch = (props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`catCard   ${
        clicked ? "bg-crimson border-0" : "bg-white border-1 border-grey"
      } `}
      onClick={() => {
        setClicked(true);
      }}
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.style}
      >
        <g clip-path="url(#clip0_825_629)">
          <path
            d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z"
            stroke={clicked ? "white" : "black"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 42V49H35V42"
            stroke={clicked ? "white" : "black"}
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 14V7H35V14"
            stroke={clicked ? "white" : "black"}
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="24"
            y1="23"
            x2="24"
            y2="34"
            stroke={clicked ? "white" : "black"}
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="28"
            y1="28"
            x2="28"
            y2="34"
            stroke={clicked ? "white" : "black"}
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="32"
            y1="26"
            x2="32"
            y2="34"
            stroke={clicked ? "white" : "black"}
            stroke-width="2"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_825_629">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p
        className={`${
          clicked ? "text-white" : "text-black"
        } font-poppins font-normal text-[15px]`}
      >
        SmartWatch
      </p>
    </div>
  );
};

export default Cat_SmartWatch;
