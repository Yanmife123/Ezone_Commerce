import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";
const LoadingPage = () => {
  return (
    <div className="absolute h-full w-full loading__background top-0 left-0 rounded-lg">
      <div className="flex justify-center items-center h-full">
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

export default LoadingPage;
