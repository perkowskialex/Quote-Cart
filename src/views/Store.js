import React from "react";
import PropTypes from "prop-types";
import StoreCard from "../components/StoreCard";

function Store({ store }) {
  const storeCards = store.map(
    ({ id, author, quantity, price, quote, image }) => (
      <StoreCard
        id={id}
        author={author}
        image={image}
        quote={quote}
        price={price}
        quantity={quantity}
      />
    )
  );
  return storeCards;
}

export default Store;

Store.propTypes = {
  store: PropTypes.array.isRequired
};
