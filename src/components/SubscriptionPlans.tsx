import { db } from "../firebase";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import { SubscriptionData, User } from "../types/type";
import { RootState } from "../redux/store";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import UserSubscriptionStatus from "./UserSubscriptionStatus";
import SubscriptionProductList from "./SubscriptionProductList";

const API_KEY = import.meta.env.VITE_FIREBASE_STRIPE;

const SubscriptionPlans = () => {
  const user = useSelector(
    (state: RootState) => state.user.currentUser,
  ) as User | null;

  const subscription = useSelector(
    (state: RootState) => state.user.subscription,
  ) as SubscriptionData | null;

  const handleSubscribe = async (priceId: string) => {
    if (!user) {
      alert("Please login to subscribe");
      return;
    }
    const customerCollection = collection(db, "customers");
    const customerDocRef = doc(customerCollection, user.uid);
    //Create a new checkout session for the customer
    const checkoutSessionsCollection = collection(
      customerDocRef,
      "checkout_sessions",
    );

    const docRef = await addDoc(checkoutSessionsCollection, {
      //Need to specify the items that the customer is paying for
      //These items can be specified either through a price ID or a price_data object
      price: priceId,
      success_url: window.location.origin + "/profile",
      cancelUrl: window.location.origin,
    });

    onSnapshot(docRef, async (snap) => {
      const sessionData = snap.data();
      if (sessionData && "sessionId" in sessionData) {
        const stripe = await loadStripe(API_KEY);
        await stripe?.redirectToCheckout({ sessionId: sessionData.sessionId });
      } else if (sessionData && "error" in sessionData) {
        alert(`An error occurred: ${sessionData.error.message}`);
      }
    });
  };

  return (
    <>
      <UserSubscriptionStatus />
      <SubscriptionProductList
        handleSubscribe={handleSubscribe}
        subscription={subscription}
      />
    </>
  );
};

export default SubscriptionPlans;

//Remarks Structure of Firestore Database:
// Firestore Database
// │
// └───collections: customers
// │   │
// │   │_____customer_uid
// │             │_____checkout_sessions
// │             │_____subscriptions
// │             │_____payment
// │
// └───collections: products
//     │
//     └───document: prod_P34o0P1xsr6sfV
//     │
//     └───document: prod_P34pumydJdB5sR
//     │
//     └───document: prod_P34qqtD7NPFlrU
//         │
//         └───subcollection: prices
