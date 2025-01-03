import { cart } from "../data/cart.js";
import { FWproducts, LIproducts, MCproducts } from "../data/products.js";



export function displayPaymentSummary() {
  const allProducts = [FWproducts, LIproducts, MCproducts];

let matchingProduct;

let totalCartItemsQuantity = 0;
 let shippingPrice = 0;
 let totalPrice = 0;
 let priceString = 0;

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    allProducts.forEach((product) => {
      product.forEach((productt) => {
        if (productId === productt.id) {
          matchingProduct = productt
        }
      });
    });

    totalCartItemsQuantity += cartItem.quantity;


    totalPrice += matchingProduct.priceNaira * cartItem.quantity;

    if (totalCartItemsQuantity >= 3) {
      shippingPrice += totalPrice * 0.08;
    } else {
      shippingPrice += totalPrice * 0.16;
    }
  });


  if (totalCartItemsQuantity === 0) {
    document.querySelector('.cart-summary').innerHTML = 
    `
    <div class="checkout-page-empty">
    <p>You haven't added any clothing to your cart</p>
    <a href="./products.html" class="btn btn-dark"><img class="arrow" src="./assets/arrow-left-solid.svg" alt="">Go place an order</a>
    </div>

    
    `;

    document.querySelector('.continue-shopping').classList.add('remove-from-checkout-page')
  }
      
const paymentSummaryHTML =
  `
     <div class="delivery-options">
        <div class="delivery-option-1">
  <input type="radio" class="delivery-option-input delivery-option-input-1" checked name="delivery-option" value="1">
  <div class="delivery-option-input2">Store Pickup - FREE</div>
</div>

<div class="delivery-option-1">
  <input type="radio" class="delivery-option-input" name="delivery-option"  value="2">
  <div class="delivery-option-input2">Delivery at home(2 - 4 days) - &#8358;${shippingPrice}</div>
</div>
      </div>


    
      <div class="price-tags">
      <div class="payment-summary-row">
          <div>TOTAL ITEMS: </div>
          <div class="payment-summary-money">${totalCartItemsQuantity}</div>
        </div> 

        <div class="payment-summary-row">
          <div>SUBTOTAL: </div>
          <div class="payment-summary-money">&#8358;${totalPrice}</div>
        </div>

        <div class="payment-summary-row">
          <div>SHIPPING: </div>
          <div class="payment-summary-money shipping-money">&#8358;${Math.round(priceString)}</div>
        </div>

        <div class="payment-summary-row">
          <div>TOTAL: </div>
          <div class="payment-summary-money money">&#8358;${totalPrice}</div>
        </div>

        <button class="place-order-button btn btn-dark">
          Place your order
        </button>


      </div>
  `

  

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
  
  document.querySelectorAll('.delivery-option-input')
  .forEach((option) => {
    option.addEventListener('change', () => {

      if (option.value === '1') {
        priceString = 0
        document.querySelector('.shipping-money').innerHTML = `&#8358;${0}`;
        document.querySelector('.money').innerHTML = `&#8358;${0 + totalPrice}`;
      } else {
        priceString = shippingPrice
        document.querySelector('.shipping-money').innerHTML = `&#8358;${priceString}`;
        document.querySelector('.money').innerHTML = `&#8358;${priceString + totalPrice}`;
      }

      
    })
  }); 
}