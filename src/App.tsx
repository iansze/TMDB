import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MoviePage from "./pages/MoviePage";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { setCurrentUser, setIsLoading } from "./redux/features/userSlice";
import AuthRoutes from "./components/AuthRoutes";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  const queryClient = new QueryClient();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          setCurrentUser({
            uid: userAuth.uid,
            email: userAuth.email,
          }),
        );
        dispatch(setIsLoading(false));
      } else {
        dispatch(setCurrentUser(null));
        dispatch(setIsLoading(false));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route element={<AuthRoutes />}>
            <Route path="/movie" element={<MoviePage />} />

            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
