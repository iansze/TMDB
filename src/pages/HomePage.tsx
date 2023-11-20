import { useRef } from "react";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const HomePage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailRef.current) {
      navigate("/sign-up", { state: { email: emailRef.current.value } });
    }
  };

  return (
    <div className="relative">
      <div className="relative h-screen bg-netflix-background bg-cover bg-center object-contain ">
        <img
          src={logo}
          alt="login_logo"
          className="fixed left-0 w-40 object-cover pl-6"
        />
        <button className="border-1 fixed right-0 rounded-lg bg-slate-700 px-4 py-1 text-white">
          <Link to="/sign-in">Sign In</Link>
        </button>
        {/*Overlay */}
        <div className="h-screen bg-black bg-opacity-60  " />
        {/* Content */}
        <div className="absolute top-1/3 z-10 mx-auto p-3 text-center text-white">
          <h1 className="text-4xl font-bold">
            Unlimited films, TV programmes and more
          </h1>
          <h2 className="my-4 text-2xl">Watch anywhere. Cancel at any time</h2>
          <h3 className="text-xl">
            Ready to watch? Enter your email to create or restart your
            membership
          </h3>
          {/* Form and button */}
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                required
                ref={emailRef}
                placeholder="Email Address"
                className="w-1/3 rounded-sm p-1 text-black"
              />
              <button
                type="submit"
                className="border-1 rounded-sm bg-red-600 px-4 py-1 text-white"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
