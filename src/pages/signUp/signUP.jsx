import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Login_signup_heroImage, Input, Loading } from "../../components";
import { Authentication } from "../../lib";
import { Images } from "../../constant";
import handleUserAction from "../../lib/dataManager";

const SignUP = () => {
  const [isPending, setIsPending] = useState(false);
  const [apiError, setApiError] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Auth = new Authentication(e.target);
    const emailValidation = Auth.validate_Email();
    const passwordValidation = Auth.validate_Password();
    const first_NameValidation = Auth.validate_UserName("first_name");
    const last_NameValidation = Auth.validate_UserName("last_name");
    const confirmPasswordValidation = Auth.validate_ConfirmPassword();
    setErrorFirstName(
      first_NameValidation.Status ? " " : first_NameValidation.message
    );
    setErrorPassword(
      passwordValidation.Status ? " " : passwordValidation.message
    );
    setErrorEmail(emailValidation.Status ? " " : emailValidation.message);
    setErrorConfirmPassword(
      confirmPasswordValidation.Status ? " " : confirmPasswordValidation.message
    );
    setErrorLastName(
      last_NameValidation.Status ? " " : last_NameValidation.message
    );

    if (
      first_NameValidation.Status &&
      last_NameValidation.Status &&
      passwordValidation.Status &&
      emailValidation.Status &&
      confirmPasswordValidation.Status
    ) {
      setIsPending(true);
      setTimeout(async () => {
        const result = await handleUserAction("register", "POST", user);
        setIsPending(false);
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
                <h2 className="heading">Create an account</h2>
                <p className="font-poppins font-normal text-[14px] text-black">
                  Enter your details below
                </p>
              </div>
              <Input
                type="text"
                name="first_name"
                style="log_Register_input"
                placeholder="First Name"
                container="mb-4"
                error={errorFirstName}
                value={user.first_name}
                Onchange={(e) => {
                  setUser((prev) => ({
                    ...prev,
                    first_name: e.target.value,
                  }));
                }}
              />
              <Input
                type="text"
                name="last_name"
                style="log_Register_input"
                placeholder="Last Name"
                container="mb-4"
                value={user.last_name}
                error={errorLastName}
                Onchange={(e) => {
                  setUser((prev) => ({
                    ...prev,
                    last_name: e.target.value,
                  }));
                }}
              />
              <Input
                type="email"
                name="email"
                style="log_Register_input"
                placeholder="email"
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
                value={user.password}
                error={errorPassword}
                Onchange={(e) => {
                  setUser((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
              />
              <Input
                type="password"
                name="confirm_password"
                style="log_Register_input"
                placeholder="Re-type Password"
                container="mb-8"
                error={errorConfirmPassword}
              />
              <div className="mt-[-10px] mb-1 text-crimson">{apiError}</div>
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
      {isPending && <Loading />}
    </div>
  );
};

export default SignUP;
