import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { PriceData, SubscriptionData, SubscriptionPlan } from "../types/type";

type SubscriptionProductListProps = {
  handleSubscribe: (priceId: string) => void;
  subscription: SubscriptionData | null;
};

const SubscriptionProductList = ({
  handleSubscribe,
  subscription,
}: SubscriptionProductListProps) => {
  const [products, setProducts] = useState<{ [key: string]: SubscriptionPlan }>(
    {},
  );

  useEffect(() => {
    const fetchProducts = async () => {
      //Get data from products collection in firestore
      const productsCollection = collection(db, "products");
      const activeProductsQuery = query(
        productsCollection,
        where("active", "==", true),
      );
      //fetching all documents from the products collection that have active set to true
      const querySnapshot = await getDocs(activeProductsQuery);
      const products: { [key: string]: SubscriptionPlan } = {};

      for (const productDoc of querySnapshot.docs) {
        const productData = productDoc.data(); //data of the product document
        const priceCollection = collection(productDoc.ref, "prices"); // See remarks below, product has subcollection: prices
        const priceSnap = await getDocs(priceCollection);
        const prices: { [priceId: string]: PriceData } = {};

        priceSnap.docs.forEach((priceDoc) => {
          prices[priceDoc.id] = priceDoc.data() as PriceData;
        });

        products[productDoc.id] = {
          ...productData,
          prices,
        } as SubscriptionPlan;
      }
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {Object.entries(products).map(([productId, productData]) => {
        const firstPriceId = Object.keys(productData.prices)[0];
        const isCurrentPackage = productData.name
          .toLocaleLowerCase()
          .includes(subscription?.role || null!);

        return (
          <div className="flex items-center justify-between" key={productId}>
            <div className="mr-4 flex items-center justify-between sm:gap-4">
              <p className="min-w-[100px] font-semibold text-white">
                {productData.name}
              </p>
              <p className="text-white">{productData.description}</p>
            </div>
            <button
              onClick={() => !isCurrentPackage && handleSubscribe(firstPriceId)}
              className="justify-between border bg-red-600 p-1 sm:p-2"
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default SubscriptionProductList;
