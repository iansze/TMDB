import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import Loading from "../UI/Loading";

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
    return <Loading open={isLoading} />;
  }

  return currentUser ? <Outlet /> : null;
};

export default AuthRoutes;
