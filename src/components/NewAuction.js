import React, { useState } from "react";
import Input from "./Input";
import auctionService from "../services/AuctionServices";

const NewAuction = () => {
  const [inputValues, setInputValues] = useState({
    title: "",
    expiryDate: "",
  });

  function inputHandleChange(event) {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  }


  async function addNewAuction(newAuction){
    auctionService.addAuction(newAuction); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();

      const data = {
        title: inputValues.title,
        expiryDate: new Date(inputValues.expiryDate),
        highestBid: 0
      }

      console.log(data);
      addNewAuction(data)
  }

  return (
    <div className="container">
      <div>
        <h1 className="title">Új tétel hozzáadása</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          name="title"
          /* errorMessages={errorMessages}
             onBlur={onBlurHandler} */
          onChange={inputHandleChange}
          type="text"
          inputValue={inputValues["title"]}
          /*  isFormValid={isFormValid} */
        />
        <Input
          name="expiryDate"
          /*  errorMessages={errorMessages}
        onBlur={onBlurHandler} */
          onChange={inputHandleChange}
          type="text"
          inputValue={inputValues["expiryDate"]}
          /* isFormValid={isFormValid} */
        />
        <div>
            <button className="btn btn-primary">Mentés</button>
        </div>
      </form>
    </div>
  );
};

export default NewAuction;
