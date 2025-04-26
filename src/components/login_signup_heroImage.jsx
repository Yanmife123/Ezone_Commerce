import { Images } from "../constant";

const Login_signup_heroImage = (props) => {
  return (
    <div className="flex-1 flex md:justify-normal justify-center">
      <img
        src={Images.Login_Register}
        alt="Login_Register_Image"
        className={"md:h-[500px] h-[400px]"}
      />
    </div>
  );
};

export default Login_signup_heroImage;
