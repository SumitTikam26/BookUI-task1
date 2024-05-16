import React, { useState } from "react";

const Book = ({ posterUrl, bookName, authorName, releaseDate, pricing }) => {
  const [cart, setCart] = useState(false);

  const cartAdded = () => {
    setCart(!cart);
  };

  const getItem = () => {
    console.log("You Will Get Book Only Rupees On", pricing);
  };

  const addToCart = () => {
    console.log("You Added " + bookName + " In You Cart");
    cartAdded();
  };

  return (
    <>
      <div className="Book">
        <img src={posterUrl} alt="Book Poster" />
        <div className="content-info">
          <h3>{bookName}</h3>
          <p>
            <b>Author:- </b>
            <span>{authorName}</span>
          </p>
          <p>
            <b>Release Date:- </b>
            <span>{releaseDate}</span>
          </p>
          <p>
            <b>Prize:- </b>
            {pricing}
          </p>
          <div className="btns">
            <button className="btn" onClick={getItem}>
              Buy
            </button>
            <button className="btn" onClick={addToCart}>
              {cart ? "Added!!!" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
