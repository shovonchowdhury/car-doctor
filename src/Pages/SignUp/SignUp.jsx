import React, { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const { handleUserSignup } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;

    console.log(name, email, pass);

    handleUserSignup(email, pass)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="lg:flex gap-14 items-center">
      <img src={loginImg} alt="" className="w-[460px] h-[502px] " />
      <form
        onSubmit={handleSignUp}
        className="border border-[#E8E8E8] p-20 w-1/2 space-y-8 rounded-lg"
      >
        <h2 className="text-5xl font-semibold text-center">Sign Up</h2>
        <div className="space-y-5">
          <label className="text-lg font-semibold" htmlFor="">
            Name
          </label>
          <br />
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            className="border border-[#E8E8E8] w-full rounded-lg py-4 px-6"
          />
        </div>

        <div className="space-y-5">
          <label className="text-lg font-semibold" htmlFor="">
            Email
          </label>{" "}
          <br />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            className="border border-[#E8E8E8] w-full rounded-lg py-4 px-6"
          />
        </div>

        <div className="space-y-5">
          <label className="text-lg font-semibold" htmlFor="">
            Confirm Password
          </label>
          <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
            className="border border-[#E8E8E8] w-full rounded-lg py-4 px-6"
          />
        </div>
        <input
          type="submit"
          value="Sign Up"
          className="w-full bg-[#FF3811] text-white py-5 rounded-lg text-xl font-semibold"
        />
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FF3811]">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
