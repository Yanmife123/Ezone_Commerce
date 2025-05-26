import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full loading__background z-5 ">
      <div className="flex justify-center items-center text-white h-[100svh]">
        <UseAnimations
          animation={infinity}
          autoPlay={true}
          strokeColor="white"
          size={80}
        />
      </div>
    </div>
  );
};

export default Loading;
