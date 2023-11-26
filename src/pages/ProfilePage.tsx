import Nav from "../components/Nav";

import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { SubscriptionData, User } from "../types/type";
import { auth } from "../firebase";
import SubscriptionPlans from "../components/SubscriptionPlans";

const ProfilePage = () => {
  const user = useSelector(
    (state: RootState) => state.user.currentUser,
  ) as User | null;

  const subscription = useSelector(
    (state: RootState) => state.user.subscription,
  ) as SubscriptionData | null;

  return (
    <div className="h-screen bg-black ">
      <Nav />
      <div className="mx-auto flex w-3/4 flex-col p-2 text-white lg:w-4/6 xl:w-1/2">
        <h1 className="mt-12 text-center text-sm font-bold sm:mt-20 sm:text-3xl lg:mt-24 lg:text-6xl">
          Edit Profile
        </h1>
        <div className="mx-auto flex w-full flex-col sm:w-5/6 lg:mt-8 lg:flex-row lg:gap-8">
          {/* Icon */}
          <svg
            className="mx-auto mt-2 h-24 w-24 rounded-lg fill-white sm:mt-6 sm:h-36 sm:w-36  "
            viewBox="0 0 100 125"
          >
            <path d="M50 51.684c12.048 0 21.848-12.787 21.848-24.834S62.048 5 50 5s-21.849 9.803-21.849 21.85C28.153 38.896 37.953 51.684 50 51.684zM66.402 51.908a25.087 25.087 0 0 1-15.252 5.15h-2.3a25.092 25.092 0 0 1-15.253-5.15C19.759 54.145 9.192 66.139 9.192 80.607 9.192 88.555 27.462 95 50 95c22.537 0 40.808-6.445 40.808-14.393 0-14.468-10.568-26.462-24.406-28.699z" />
          </svg>
          {/* Personal Data */}
          <div className="mt-3 flex flex-1 flex-col gap-3 sm:mt-3">
            <p className="bg-gray-600 p-1 sm:p-2">{user?.email}</p>
            <h2 className="sm:text-2xl">Plans ({subscription?.role})</h2>
            <h3 className="sm:text-xl">
              Renewal Date:{" "}
              {subscription?.current_period_end
                ? new Date(
                    subscription.current_period_end * 1000,
                  ).toLocaleDateString()
                : "Not available"}
            </h3>
            <SubscriptionPlans />
            <button
              onClick={() => auth.signOut()}
              className="border-1 bg-red-600 p-2"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
