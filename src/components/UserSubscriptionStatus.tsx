// UserSubscriptionStatus.js
import { useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, onSnapshot, Unsubscribe } from "firebase/firestore";
import { User } from "../types/type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setSubscription } from "../redux/features/userSlice";

const UserSubscriptionStatus = () => {
  const dispatch = useDispatch();
  const user = useSelector(
    (state: RootState) => state.user.currentUser,
  ) as User | null;

  // Check if user has a subscription
  useEffect(() => {
    let unsubscribe: Unsubscribe;
    if (user) {
      const customerCollection = collection(db, "customers");
      const customerDoc = doc(customerCollection, user?.uid);
      const subscriptionCollection = collection(customerDoc, "subscriptions");

      unsubscribe = onSnapshot(subscriptionCollection, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const subscriptionData = {
            role: doc.data().role,
            current_period_end: doc.data().current_period_end.seconds,
            current_period_start: doc.data().current_period_start.seconds,
          };
          dispatch(setSubscription(subscriptionData));
        });
      });
    }
    return () => {
      unsubscribe();
    };
  }, [user, dispatch]);

  // This component does not render anything
  return null;
};

export default UserSubscriptionStatus;
