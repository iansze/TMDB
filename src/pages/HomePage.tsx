import { useRef } from "react";
import { useNavigate } from "react-router";

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
      {/*Overlay */}
      <div className="absolute inset-0 z-10 h-screen bg-black bg-opacity-60  " />
      <div className=" h-screen bg-netflix-background bg-cover bg-center object-contain ">
        <div className="relative z-20 mx-auto flex w-5/6 justify-between pt-4">
          <svg
            className=" h-14 w-40 rounded-lg fill-green-400 stroke-green-400"
            viewBox="0 0 185.04 133.4"
          >
            <path d="M51.06 66.7A17.67 17.67 0 0 1 68.73 49h-.1A17.67 17.67 0 0 1 86.3 66.7a17.67 17.67 0 0 1-17.67 17.67h.1A17.67 17.67 0 0 1 51.06 66.7Zm82.67-31.33h32.9A17.67 17.67 0 0 0 184.3 17.7 17.67 17.67 0 0 0 166.63 0h-32.9a17.67 17.67 0 0 0-17.67 17.7 17.67 17.67 0 0 0 17.67 17.67Zm-113 98h63.9a17.67 17.67 0 0 0 17.67-17.67A17.67 17.67 0 0 0 84.63 98h-63.9a17.67 17.67 0 0 0-17.67 17.7 17.67 17.67 0 0 0 17.67 17.67Zm83.92-49h6.25L125.5 49h-8.35l-8.9 23.2h-.1L99.4 49h-8.9Zm32.45 0h7.8V49h-7.8Zm22.2 0h24.95V77.2H167.1V70h15.35v-7.2H167.1v-6.6h16.25V49h-24ZM10.1 35.4h7.8V6.9H28V0H0v6.9h10.1Zm28.9 0h7.8V20.1h15.1v15.3h7.8V0h-7.8v13.2H46.75V0H39Zm41.25 0h25v-7.2H88V21h15.35v-7.2H88V7.2h16.25V0h-24Zm-79 49H9V57.25h.1l9 27.15H24l9.3-27.15h.1V84.4h7.8V49H29.45l-8.2 23.1h-.1L13 49H1.2Zm112.09 49H126a24.59 24.59 0 0 0 7.56-1.15 19.52 19.52 0 0 0 6.35-3.37 16.37 16.37 0 0 0 4.37-5.5 16.91 16.91 0 0 0 1.72-7.58 18.5 18.5 0 0 0-1.68-8.25 15.1 15.1 0 0 0-4.52-5.53 18.55 18.55 0 0 0-6.73-3.02 33.54 33.54 0 0 0-8.07-1h-11.71Zm7.81-28.2h4.6a17.43 17.43 0 0 1 4.67.62 11.68 11.68 0 0 1 3.88 1.88 9 9 0 0 1 2.62 3.18 9.87 9.87 0 0 1 1 4.52 11.92 11.92 0 0 1-1 5.08 8.69 8.69 0 0 1-2.67 3.34 10.87 10.87 0 0 1-4 1.83 21.57 21.57 0 0 1-5 .55h-4.15Zm36.14 28.2h14.5a23.11 23.11 0 0 0 4.73-.5 13.38 13.38 0 0 0 4.27-1.65 9.42 9.42 0 0 0 3.1-3 8.52 8.52 0 0 0 1.2-4.68 9.16 9.16 0 0 0-.55-3.2 7.79 7.79 0 0 0-1.57-2.62 8.38 8.38 0 0 0-2.45-1.85 10 10 0 0 0-3.18-1v-.1a9.28 9.28 0 0 0 4.43-2.82 7.42 7.42 0 0 0 1.67-5 8.34 8.34 0 0 0-1.15-4.65 7.88 7.88 0 0 0-3-2.73 12.9 12.9 0 0 0-4.17-1.3 34.42 34.42 0 0 0-4.63-.32h-13.2Zm7.8-28.8h5.3a10.79 10.79 0 0 1 1.85.17 5.77 5.77 0 0 1 1.7.58 3.33 3.33 0 0 1 1.23 1.13 3.22 3.22 0 0 1 .47 1.82 3.63 3.63 0 0 1-.42 1.8 3.34 3.34 0 0 1-1.13 1.2 4.78 4.78 0 0 1-1.57.65 8.16 8.16 0 0 1-1.78.2H165Zm0 14.15h5.9a15.12 15.12 0 0 1 2.05.15 7.83 7.83 0 0 1 2 .55 4 4 0 0 1 1.58 1.17 3.13 3.13 0 0 1 .62 2 3.71 3.71 0 0 1-.47 1.95 4 4 0 0 1-1.23 1.3 4.78 4.78 0 0 1-1.67.7 8.91 8.91 0 0 1-1.83.2h-7Z" />
          </svg>
          <button
            onClick={() => navigate("/sign-in")}
            className=" rounded-lg  bg-slate-700 px-4 py-1 font-semibold text-white"
          >
            Sign In
          </button>
        </div>
        {/* Content */}
        <div className="absolute left-[5%] top-1/3 z-10 p-3 text-center text-white md:left-[10%] lg:left-[20%] xl:left-[25%] 2xl:left-[30%]">
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
