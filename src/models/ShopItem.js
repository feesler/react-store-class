export class ShopItem {
  constructor(entity) {
    Object.assign(this, {
      brand: '',
      title: '',
      description: '',
      descriptionFull: '',
      currency: '$',
      price: 0
    }, entity);
  }

  formatPrice() {
    return `${this.currency}${this.price.toFixed(2)}`;
  }
}
