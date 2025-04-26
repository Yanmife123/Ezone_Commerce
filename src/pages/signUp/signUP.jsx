import { Link } from "react-router-dom";
import { Login_signup_heroImage, Input } from "../../components";
import { Images } from "../../constant";
const SignUP = () => {
  return (
    <div className="flex__center paddingX ">
      <div className="boxWidth my-12 h-auto">
        <div className="flex md:flex-row flex-col md:gap-0 gap-10">
          <Login_signup_heroImage />
          <div className="flex-1 flex flex-col items-center justify-center">
            <form action="" className="md:w-auto w-full">
              <div className="mb-6 flex flex-col md:items-start items-center">
                <h2 className="heading">Create an account</h2>
                <p className="font-poppins font-normal text-[14px] text-black">
                  Enter your details below
                </p>
              </div>
              <Input
                type="text"
                name="Username"
                style="log_Register_input"
                placeholder="UserName"
                container="mb-4"
              />
              <Input
                type="email"
                name="User Email"
                style="log_Register_input"
                placeholder="email"
                container="mb-4"
              />
              <Input
                type="password"
                name="password"
                style="log_Register_input"
                placeholder="Password"
                container="mb-8"
              />
              <div className="mb-4 flex flex-col gap-4 items-center">
                <button className="md:py-2 py-3 px-7 w-full bg-crimson text-white btn rounded-[5px]">
                  Create Account
                </button>
                <div className="w-full border-1 border-grey flex justify-center gap-2 py-3 rounded-[5px] btn">
                  <img src={Images.Google} alt="google Icone" />
                  <div>Sign up with Google</div>
                </div>
                <div className="py-3 flex gap-2 items-center">
                  <div>Already have account?</div>
                  <Link to={"/login"} className="underline text-crimson">
                    Log in
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
