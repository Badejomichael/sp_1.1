import { cart, removeFromCart, saveToStorage } from "../data/cart.js";
import { FWproducts, LIproducts, MCproducts } from "../data/products.js";
import { displayPaymentSummary } from "../checkout/payment-summary.js";


export function displayOrderSummary() {

  
  let cartOrderSummaryHTML = '';

  const allProducts = [FWproducts, LIproducts, MCproducts];

  let matchingProduct;

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    allProducts.forEach((product) => {
      product.forEach((productt) => {
        if(productId === productt.id) {
          matchingProduct = productt
        }
      });
    });



     const totalPrice = matchingProduct.priceNaira * cartItem.quantity;


      cartOrderSummaryHTML +=
    `
      <div class="cart-conatiner js-cart-item-container-${matchingProduct.id}">
        <div class="product">
          <img src="${matchingProduct.image}" alt="">
          <div class="product-details">
            <p class="product-name">${matchingProduct.name}</p>
            <p class="cs p">Size: <span class="cloth-size">${cartItem.size}</span></p>
            <div class="other-info">
              <p class="p">Price: <span class="price"> &#8358;${matchingProduct.priceNaira}</span></p>
              <p class="quantity p">QTY:<button class="decrease-quantity js-decrease-quantity" data-product-id="${matchingProduct.id}">-</button><span class="product-quantity">${cartItem.quantity}</span><button class="increase-quantity js-increase-quantity" data-product-id="${matchingProduct.id}">+</button></p>
            </div>
            <p class="P">Total: <span class="price">&#8358;${totalPrice}</span></p>
          </div>
        </div>

        <div class="remove-product js-remove-product" data-product-id="${matchingProduct.id}"><img src="./assets/xmark-solid.svg" alt="" class="remove-icon"></div>
      </div>
    `

  });




  document.querySelector('.js-order-summary').innerHTML = cartOrderSummaryHTML;

  document.querySelectorAll('.js-remove-product')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        removeFromCart(productId);
        displayPaymentSummary();
      });
    });


    document.querySelectorAll('.js-increase-quantity')
      .forEach((button) => {
        button.addEventListener('click', () => {
          const productId = button.dataset.productId
          let matchingItem;
          cart.forEach((cartItem) => {
            if (productId === cartItem.productId) {
              matchingItem = cartItem;
            }
          });


          if (matchingItem) {

            if (matchingItem.quantity < 5){
              matchingItem.quantity += 1
            } else {
              alert('Maximum Quantity reached.');
            }

          }



          saveToStorage();
          displayOrderSummary();
          displayPaymentSummary();
        });

    });



    document.querySelectorAll('.js-decrease-quantity')
      .forEach((button) => {
        button.addEventListener('click', () => {
          const productId = button.dataset.productId
          let matchingItem;
          cart.forEach((cartItem) => {
            if (productId === cartItem.productId) {
              matchingItem = cartItem;
            }
          });


          if (matchingItem) {

             if (matchingItem.quantity > 1){
              matchingItem.quantity = matchingItem.quantity - 1
            }

          }
          saveToStorage();
          displayOrderSummary();
          displayPaymentSummary();
        });

    });
  }
