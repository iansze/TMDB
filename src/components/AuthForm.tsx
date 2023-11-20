import { SubmitHandler, useForm } from "react-hook-form";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { AuthFormType } from "../types/type";

type FieldName = "email" | "password";

type AuthFormProps = {
  fields: {
    name: string;
    type: string;
    placeholder: string;
    required: boolean;
    defaultValue?: string;
  }[];
  onSubmit: SubmitHandler<AuthFormType>;
  buttonText: string;
  title: string;
};

const AuthForm = ({ fields, onSubmit, buttonText, title }: AuthFormProps) => {
  const { register, handleSubmit } = useForm<AuthFormType>();

  return (
    <div className="relative h-screen bg-netflix-background bg-cover bg-center object-contain ">
      <img
        src={logo}
        alt="login_logo"
        className="fixed left-0 w-40 object-cover pl-6"
      />
      <div className="h-screen bg-black bg-opacity-60 " />
      <div className="absolute inset-0  grid grid-cols-4 grid-rows-6 place-items-stretch lg:grid-cols-6 lg:grid-rows-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="col-span-2  col-start-2 row-span-2 row-start-3 flex flex-col rounded bg-zinc-950 p-8 lg:col-start-3 "
        >
          <h1 className="mb-7 text-3xl font-bold text-white 2xl:mx-auto 2xl:w-3/4">
            {title}
          </h1>
          {fields.map((field) => (
            <input
              key={field.name}
              {...register(field.name as FieldName)}
              type={field.type}
              placeholder={field.placeholder}
              className="mb-4 rounded-sm p-2 2xl:mx-auto 2xl:w-3/4"
              required={field.required}
              defaultValue={field.defaultValue}
            />
          ))}
          <button
            type="submit"
            className="mb-4 mt-4 rounded-sm bg-red-600 p-2 text-white  2xl:mx-auto 2xl:w-3/4"
          >
            {buttonText}
          </button>
          {title === "Sign In" && (
            <div className="text-center text-white">
              New to Netflix?
              <Link to="/sign-up" className="ml-1 text-red-600 hover:underline">
                Sign up now.
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
