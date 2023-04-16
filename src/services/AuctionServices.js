import { db } from "../firebase-config/firebase-config";
import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";

const auctionRef = collection(db, "auction_items");
/* console.log(auctionRef); */
class AuctionServices {
  getAllAuctions = async () => {
    return await getDocs(auctionRef);
  };

  getAuction = async (id) => {
    const auctionDoc = doc(auctionRef, id);
    return await getDoc(auctionDoc);
  };

  addAuction = async (newAuction) => {
    return await addDoc(auctionRef, newAuction);
  };
}

const auctionService = new AuctionServices();

export default auctionService;
