import { cart, addToCart, saveToStorage, updateCartQuantity } from '../data/cart.js'
import { FWproducts, LIproducts, MCproducts } from "../data/products.js";
import { femaleWearSearch, lingerieSearch, nightwearSearch } from './search.js';


// products page




updateCartQuantity();

export let FWproductHTML = '';
FWproducts.forEach((product) => {
  FWproductHTML += `
  <div class="card" style="width: 19rem">
    <img src="${product.image}" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">
        &#8358;${product.priceNaira}
      </p>

      <div class="cloth-size">
        <p>Size:</p>
        <div class="product-size-container">
          <select class="js-size-selector-${product.id}">
            <option selected value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
      <button class="btn btn-outline-dark js-btn1 js-add-to-cart" data-product-id="${product.id}">Add to cart</button>
    </div>
  </div>
  `
});

document.querySelector('.js-products-row-1').innerHTML = FWproductHTML;






export let LIproductHTML = '';
LIproducts.forEach((product) => {
  LIproductHTML += `
    <div class="card" style="width: 19rem">
      <img src="${product.image}" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">
          &#8358;${product.priceNaira}
        </p>

        <div class="cloth-size">
        <p>Size:</p>
        <div class="product-size-container">
          <select class="js-size-selector-${product.id}">
            <option selected value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
        <button class="btn btn-outline-dark js-btn1 js-add-to-cart" data-product-id="${product.id}">Add to cart</button>
      </div>
    </div>
  `
});


document.querySelector('.js-products-row-2').innerHTML = LIproductHTML;



export let MCproductHTML = '';
MCproducts.forEach((product) => {
  MCproductHTML += `
    <div class="card" style="width: 19rem">
      <img src="${product.image}" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">
          &#8358;${product.priceNaira}
        </p>

        <div class="cloth-size">
        <p>Size:</p>
        <div class="product-size-container">
          <select class="js-size-selector-${product.id}">
            <option selected value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
        <button class="btn btn-outline-dark js-btn1 js-add-to-cart" data-product-id="${product.id}">Add to cart</button>
      </div>
    </div>
  `
});

document.querySelector('.js-products-row-3').innerHTML = MCproductHTML;


// add to cart button
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId
  addToCart(productId);
  
  });
});


// search bar
document.querySelector('.search-form-btn').addEventListener

('click', () => {

  const searchWord = document.querySelector('.search-input');
  const newSearchWord = searchWord.value.toLowerCase();
  femaleWearSearch(newSearchWord);
  lingerieSearch(newSearchWord);
  nightwearSearch(newSearchWord);

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId
  addToCart(productId);
  updateCartQuantity();
  console.log(productId)
  })
})
});