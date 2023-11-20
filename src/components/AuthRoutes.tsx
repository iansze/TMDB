import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useEffect } from "react";

const AuthRoutes = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const isLoading = useSelector((state: RootState) => state.user.isLoading);

  useEffect(() => {
    if (!currentUser && !isLoading) {
      navigate("/sign-in");
    }
  }, [currentUser, isLoading, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return currentUser ? <Outlet /> : null;
};

export default AuthRoutes;
