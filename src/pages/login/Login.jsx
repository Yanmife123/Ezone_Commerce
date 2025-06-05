import { useState,useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { Authentication } from "../../lib";
import { Login_signup_heroImage, Input, Loading } from "../../components";
import handleUserAction from "../../lib/dataManager";

const Login = () => {
  const { userAccess, isloadingAccess } = useContext(AppContext);
  // Access the user access state and loading state from the context
  const [isPending, setIpending] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [user, setUser] = useState({ email: "", password: "" });
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate(null);

  useEffect(() => {
    if (!isloadingAccess) {
      if (userAccess) {
        navigate("/");
      } // Wait until the user access state is determined
    }
  }, [isloadingAccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Auth = new Authentication(e.target);
    const emailValidation = Auth.validate_Email();
    const passwordValidation = Auth.validate_Password(1);

    setErrorEmail(emailValidation.Status ? " " : emailValidation.message);
    setErrorPassword(
      passwordValidation.Status ? " " : passwordValidation.message
    );

    if (emailValidation.Status && passwordValidation.Status) {
      setIpending(true);
      setTimeout(async () => {
        const result = await handleUserAction("login", user);
        setIpending(false);
        if (result.status) {
          navigate("/");
        } else {
          setApiError(data.error);
        }
      }, 4000);
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
                <p className="font-poppins font-normal text-base mt-1">
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
                value={user.email}
                Onchange={(e) => {
                  setUser((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
              />
              <Input
                type="password"
                name="password"
                style="log_Register_input"
                placeholder="Password"
                container="mb-8"
                error={errorPassword}
                value={user.password}
                Onchange={(e) => {
                  setUser((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
              />
              <div className="mt-[-10px] mb-1 text-crimson">{apiError}</div>
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

      {isPending && <Loading />}
    </div>
  );
};

export default Login;
