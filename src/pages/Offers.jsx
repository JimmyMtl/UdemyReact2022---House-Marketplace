import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { db } from "../firebase.config";
import ListingItem from "../components/ListingItem";

const Offers = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchedListing] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, "listings");

        // Create a query
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(10)
        );
        // Execute query
        const querySnap = await getDocs(q);

        const lastVisible = querySnap.docs[querySnap.docs.length - 1];

        setLastFetchedListing(lastVisible);

        let listing = [];
        querySnap.forEach((doc) => {
          return listing.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listing);
        setLoading(false);
      } catch (e) {
        toast.error("Could not fetch listings");
      }
    };
    fetchListings();
  }, []);
  // Pagination / Load More
  const onFetchMoreListings = async () => {
    try {
      // Get reference
      const listingsRef = collection(db, "listings");

      // Create a query
      const q = query(
        listingsRef,
        where("offer", "==", true),
        orderBy("timestamp", "desc"),
        limit(10),
        startAfter(lastFetchedListing)
      );
      // Execute query
      const querySnap = await getDocs(q);
      console.log(querySnap);
      if (querySnap.docs.length > 0) {
        const lastVisible = querySnap?.docs[querySnap?.docs?.length - 1];

        setLastFetchedListing(lastVisible);

        let listing = [];
        querySnap.forEach((doc) => {
          if (typeof doc.id !== "undefined") {
            console.log(doc);
            return listing.push({
              id: doc?.id,
              data: doc?.data(),
            });
          }
        });
        setListings((prevState) => [...prevState, listing]);
      }
    } catch (e) {
      toast.error("Could not fetch listings");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={"category"}>
      <header>
        <p className="pageHeader">Offers </p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <ul className="categoryListings">
            {listings.map((listing, key) => (
              <ListingItem key={key} listing={listing?.data} id={listing?.id} />
            ))}
          </ul>

          <br />
          {lastFetchedListing && (
            <p className="loadMore" onClick={onFetchMoreListings}>
              Load More
            </p>
          )}
        </>
      ) : (
        <p>There are no current offers</p>
      )}
    </div>
  );
};

export default Offers;
