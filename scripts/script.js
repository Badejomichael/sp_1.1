import { cart, addToCart, saveToStorage, updateCartQuantity } from '../data/cart.js'
import { FWproducts1, FWproducts2, products3, products4, products5, products6 } from "../data/products.js";
import { femaleWearSearch, lingerieSearch, nightwearSearch } from './search.js';


// products page




updateCartQuantity();

export let FWproductHTML = '';
FWproducts1.forEach((product) => {
  FWproductHTML += `
      <div class="slide product">
        <div class="card" style="width: 22rem">
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
      </div>
  `
});

document.querySelector('.js-slider1').innerHTML = FWproductHTML;







export let FW2productHTML = '';
FWproducts2.forEach((product) => {
  FW2productHTML += `
      <div class="slide product">
        <div class="card" style="width: 22rem">
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
      </div>
  `
});

document.querySelector('.js-slider2').innerHTML = FW2productHTML;




export let FW3productHTML = '';
products3.forEach((product) => {
  FW3productHTML += `
      <div class="slide product">
        <div class="card" style="width: 22rem">
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
      </div>
  `

});

document.querySelector('.js-slider3').innerHTML = FW3productHTML;





export let FW4productHTML = '';
products4.forEach((product) => {
  FW4productHTML += `
      <div class="slide product">
        <div class="card" style="width: 22rem">
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
      </div>
  `
});


document.querySelector('.js-slider4').innerHTML = FW4productHTML;



export let FW5productHTML = '';
products5.forEach((product) => {
  FW5productHTML += `
      <div class="slide product">
        <div class="card" style="width: 22rem">
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
      </div>
  `
});

document.querySelector('.js-slider5').innerHTML = FW5productHTML;






export let FW6productHTML = '';
products6.forEach((product) => {
  FW6productHTML += `
      <div class="slide product">
        <div class="card" style="width: 22rem">
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
      </div>
  `
});

document.querySelector('.js-slider6').innerHTML = FW6productHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId
  addToCart(productId);
  
  });
});

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