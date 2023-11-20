import Nav from "../components/Nav";
import avatar from "../assets/avatar.png";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { User } from "../types/type";
import { auth } from "../firebase";

const ProfilePage = () => {
  const user = useSelector(
    (state: RootState) => state.user.currentUser,
  ) as User | null;

  return (
    <div className="h-screen bg-black ">
      <Nav />
      <div className="mx-auto flex w-3/4 flex-col p-2 text-white lg:w-1/2">
        <h1 className="mt-40 text-center text-5xl font-bold lg:text-6xl">
          Edit Profile
        </h1>
        <div className=" flex flex-col lg:flex-row lg:gap-8 ">
          <img
            src={avatar}
            alt="avatar"
            className="mx-auto mt-8 h-60  bg-white"
          />
          <div className="mt-8 flex flex-1 flex-col gap-3">
            <p className="bg-gray-600 p-2">{user?.email}</p>
            <h2 className="text-2xl">Plans</h2>
            <h3 className="text-xl">Dtae</h3>
            <div className="flex items-center justify-between">
              <p className="">Standard</p>
              <button className="border-1 justify-between bg-red-600 p-2">
                Subscribe
              </button>
            </div>
            <div className="flex items-center justify-between">
              <p className="">Standard</p>
              <button className="border-1 bg-red-600 p-2">Subscribe</button>
            </div>
            <div className="flex items-center justify-between">
              <p className="">Standard</p>
              <button className="border-1 bg-red-600"></button>
            </div>
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
