import { AuthFormType } from "../types/type";
import { useMutation } from "@tanstack/react-query";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import AuthForm from "../components/AuthForm";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const loginFunction = async (data: AuthFormType) => {
    await setPersistence(auth, browserLocalPersistence);
    return signInWithEmailAndPassword(auth, data.email, data.password);
  };

  const { mutate, isError, error } = useMutation({
    mutationFn: (data: AuthFormType) => loginFunction(data),
    onSuccess: () => {
      navigate("/movie");
    },
    onError: (error) => {
      console.error("Error creating user:", error.message);
    },
  });

  const handleLogin = (data: AuthFormType) => {
    mutate(data);
  };

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  const signInFields = [
    {
      name: "email",
      type: "email",
      placeholder: "Email Address",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
  ];

  return (
    <div className="sign-in-container">
      <AuthForm
        fields={signInFields}
        onSubmit={handleLogin}
        buttonText="Sign In"
        title="Sign In"
      />
    </div>
  );
};

export default SignInPage;
