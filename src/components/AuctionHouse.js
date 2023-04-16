import React, { useEffect, useState } from "react";
import auctionService from "../services/AuctionServices";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

const AuctionHouse = () => {
  const [auctionsItems, setAuctionsItems] = useState([]);
  /* const [filteredTitle, setFilteredTitle] = useState("Válassz!"); */
  const [inputValues, setInputValues] = useState({
    title: "",
    highestBidderName: "",
    highestBid: "",
  });

  const navigate = useNavigate();

  const getAuctions = async () => {
    const data = await auctionService.getAllAuctions();
    setAuctionsItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getAuctions();
  }, []);

  function handleNavigate() {
    navigate("/auction/new");
  }

  const titleOtions = [
    "Válassz!",
    ...new Set(auctionsItems.map((auction) => auction.title)),
  ];
/* 
  const handleSettlementChange = (event) => {
    setFilteredTitle(event.target.value);
  }; */
  function inputHandleChange(event) {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  }


  return (
    <div className="container">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Tétel címe</th>
            <th>Legmagasabb licit</th>
            <th>Licitáló neve</th>
            <th>Lejárati idő</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(auctionsItems).map((auctionItem) => (
            <tr key={auctionItem.id}>
              <td>{auctionItem.title}</td>
              <td>{auctionItem.highestBid}</td>
              <td>{auctionItem.highestBidderName}</td>
              <td>{auctionItem.expiryDate.toDate().toLocaleString("Hu-hu")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          type="button"
          onClick={handleNavigate}
          className="btn btn-primary"
        >
          Új hozzáadása
        </button>
      </div>
      <div>
        <form>
          
        <Input
          name="title"
          /* errorMessages={errorMessages}
             onBlur={onBlurHandler} */
          onChange={inputHandleChange}
          type="select"
          inputValue={inputValues['title']}
          options={titleOtions}
          labelText='Tétel megnevezése'
          /*  isFormValid={isFormValid} */
        />
        <Input
          name="highestBidderName"
          /* errorMessages={errorMessages}
             onBlur={onBlurHandler} */
          onChange={inputHandleChange}
          type="text"
          inputValue={inputValues['highestBidderName']}
          labelText='Licitáló Neve'
          /*  isFormValid={isFormValid} */
        />
        <Input
          name="highestBid"
          /* errorMessages={errorMessages}
             onBlur={onBlurHandler} */
          onChange={inputHandleChange}
          type="text"
          inputValue={inputValues['highestBid']}
          labelText='Tét'
          /*  isFormValid={isFormValid} */
        />
 <button className="btn btn-primary form-button">Licit</button>


        </form>
      </div>
    </div>
  );
};

export default AuctionHouse;
