import React from 'react';
import { PropTypes } from 'prop-types';
import { ShopItem } from '../models/ShopItem.js';

export class ShopItemClass extends React.Component {
  static propTypes = {
    item: PropTypes.instanceOf(ShopItem)
  };

  render() {
    const { item } = this.props;

    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">
          {item.descriptionFull}
        </div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{item.formatPrice()}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}
