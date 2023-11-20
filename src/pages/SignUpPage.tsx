import { useLocation, useNavigate } from "react-router";
import { AuthFormType } from "../types/type";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useMutation } from "@tanstack/react-query";
import AuthForm from "../components/AuthForm";

const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state
    ? (location.state as { email?: string }).email
    : "";

  const registerFunction = async (data: AuthFormType) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
  };

  const { mutate, isError, error } = useMutation({
    mutationFn: (data: AuthFormType) => registerFunction(data),
    onSuccess: () => {
      navigate("/sign-in");
    },
    onError: (error) => {
      console.error("Error creating user:", error.message);
    },
  });

  const handleSignUp = (data: AuthFormType) => {
    mutate(data);
  };

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  const signUpFields = [
    { name: "username", type: "text", placeholder: "Username", required: true },
    {
      name: "email",
      type: "email",
      placeholder: "Email Address",
      required: true,
      defaultValue: email,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
  ];

  return (
    <div className="sign-up-container">
      <AuthForm
        fields={signUpFields}
        onSubmit={handleSignUp}
        buttonText="Sign Up"
        title="Sign Up"
      />
    </div>
  );
};

export default SignUpPage;
