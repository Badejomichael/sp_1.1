export let  cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [
 
]; 
}

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function updateCartQuantity() {
  let cartQuantity = 0;
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    saveToStorage()
}

export function addToCart(productId) {

  let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    const selectedSize = document.querySelector(`.js-size-selector-${productId}`).value;

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
        size: selectedSize,
        deliveryOptionId: 0
      });

      updateCartQuantity();
    } 
    if (matchingItem.quantity <= 5) {
      updateCartQuantity();
    }
     else if (matchingItem.quantity > 5) {
      matchingItem.quantity = 5;
      
    }

    saveToStorage();
}



export function removeFromCart(productId) {
  let newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId != productId) {
      newCart.push(cartItem)
    }

    cart = newCart
  });

  const container = document.querySelector(`.js-cart-item-container-${productId}`);
  container.remove();

  saveToStorage();
}





