import { useState } from "react";

const Login = () => {
  const [sliding, setSliding] = useState(false);

  const handleSlide = () => {
    setSliding(!sliding);
  };

  return (
    <div className="bg-[url('./background.jpg')] bg-cover h-screen w-screen pt-24 relative">
      <div className="h-[80%] w-[50%] m-auto bg-white rounded-3xl md:flex bg-opacity-60">
        <div
          className={`md:w-1/4 bg-[#576f5f] rounded-3xl ${
            sliding ? "translate-x-[320px]" : "translate-x-0"
          } transition-transform duration-500 ease-in-out p-10 text-white font-extralight absolute leading-tight`}
        >
          <img src="logo.png" className="w-20 h-20 mx-auto" />
          <h1 className="text-white text-2xl mx-auto my-4">
            HEY! WELCOME BACK.
          </h1>
          <h4 className="">
            Login now and unlock a world of possibilities in serving our
            institution and making a positive impact.
          </h4>
          <br />
          <p>Are you a faculty ? </p>
          <button
            onClick={handleSlide}
            className="border px-10 p-1 rounded-full my-3"
          >
            Login
          </button>
        </div>
        <div className="p-10 w-1/2 text-[#6a7f71] font-extralight">
          <h1 className="text-3xl">FACULTY LOGIN</h1>
          <p className="mt-5 text-sm line-clamp-3">
            Login now to access a world of convenience and stay of top of your
            attendance. Gain secure access to personalized features, exclusive
            updates and seamless interactions.
          </p>
          <input
            type="text"
            className="m-5 rounded-full h-8 w-48 p-4 text-sm font-semibold"
            placeholder="Employee Id"
          />
          <input
            type="password"
            className="mx-5 rounded-full h-8 w-48 p-4 text-sm font-semibold"
            placeholder="Password"
          />
          <div className="text-black flex mt-2 text-md justify-center items-center font-normal">
            <input type="checkbox" className="m-2" value="remember" />
            <p>Remember Me for 12 days !</p>
          </div>
          <button className="bg-[#576f5f] text-white rounded-full px-10 py-2 mt-4 ml-12">
            Sign In
          </button>
        </div>
        <div className="p-10 w-1/2 text-[#6a7f71] font-extralight">
          <h1 className="text-3xl">STUDENT LOGIN</h1>
          <p className="mt-5 text-sm line-clamp-3">
            Login now to access a world of convenience and stay of top of your
            attendance. Gain secure access to personalized features, exclusive
            updates and seamless interactions.
          </p>
          <input
            type="text"
            className="m-5 rounded-full h-8 w-48 p-4 text-sm font-semibold"
            placeholder="Username / Email Id"
          />
          <input
            type="password"
            className="mx-5 rounded-full h-8 w-48 p-4 text-sm font-semibold"
            placeholder="Password"
          />
          <div className="text-black flex mt-2 text-md justify-center items-center font-normal">
            <input type="checkbox" className="m-2" value="remember" />
            <p>Remember Me for 12 days !</p>
          </div>
          <button className="bg-[#576f5f] text-white rounded-full px-10 py-2 mt-4 ml-12">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
