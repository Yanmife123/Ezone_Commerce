import { useState } from "react";
import { Link } from "react-router-dom";
import { Authentication } from "../../lib";
import { Login_signup_heroImage, Input } from "../../components";

const Login = () => {
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const Auth = new Authentication(e.target);
    const emailValidation = Auth.validate_Email();
    const passwordValidation = Auth.validate_Password(1);

    if (emailValidation.Status) {
      setErrorEmail("");
    } else {
      setErrorEmail(emailValidation.message);
    }

    if (passwordValidation.Status) {
      setErrorPassword("");
    } else {
      setErrorPassword(passwordValidation.message);
    }
  };

  return (
    <div className="flex__center paddingX ">
      <div className="boxWidth my-12 h-auto">
        <div className="flex md:flex-row flex-col md:gap-0 gap-10">
          <Login_signup_heroImage />
          <div className="flex-1 flex flex-col items-center justify-center">
            <form
              className="md:w-auto w-full"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="mb-6 flex flex-col md:items-start items-center">
                <h2 className="heading capitalize">Log in to Ezone</h2>
                <p className="font-poppins font-normal text-base">
                  Enter your details below
                </p>
              </div>
              <Input
                type="email"
                name="email"
                style="log_Register_input"
                placeholder="User Email"
                container="mb-4"
                error={errorEmail}
              />
              <Input
                type="password"
                name="password"
                style="log_Register_input"
                placeholder="Password"
                container="mb-8"
                error={errorPassword}
              />
              <div className="mb-4 flex md:flex-row flex-col  justify-between md:gap-0 gap-4 items-center">
                <button className="md:py-2 py-3 px-7 md:w-auto w-full bg-crimson text-white btn rounded-[5px]">
                  Login
                </button>
                <Link to={""} className="text-crimson underline">
                  forgotten Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
