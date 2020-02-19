import React, { Component } from "react";

import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA // Consist of all the apparels details such as Hats, Sneakers, Jackets, Women, Men
    };
  }

  render() {
    const { collections } = this.state; // So that instead of writing this.state.collections
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} /> // title = collections.title,
        ))}
      </div>
    );
  }
}

export default ShopPage;
