import { cart, removeFromCart, saveToStorage } from "../data/cart.js";
import { FWproducts1, FWproducts2, products3, products4, products5, products6 } from "../data/products.js";


function displayCartSummary() {

  
  let cartOrderSummaryHTML = '';

  const allProducts = [FWproducts1, FWproducts2, products3, products4, products5, products6]

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
          displayCartSummary();
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
          displayCartSummary();
          displayPaymentSummary();
        });

    });
  }

  displayCartSummary();


  function displayPaymentSummary() {
    const allProducts = [FWproducts1, FWproducts2, products3, products4, products5, products6]

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
      <p>You haven't added any cloth to your cart</p>
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


  displayPaymentSummary();



























