import { useState } from "react";

const Cat_Computer = () => {
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
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <g clipPath="url(#clip0_825_613)">
          <path
            d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z"
            stroke={clicked ? "white" : "black"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.3333 46.6666H39.6667"
            stroke={clicked ? "white" : "black"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 37.3334V46.6667"
            stroke={clicked ? "white" : "black"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 37.3334V46.6667"
            stroke={clicked ? "white" : "black"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 32H48"
            stroke={clicked ? "white" : "black"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_825_613">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p
        className={`${
          clicked ? "text-white" : "text-black"
        } font-poppins font-normal text-[15px]`}
      >
        Computers
      </p>
    </div>
  );
};
export default Cat_Computer;
