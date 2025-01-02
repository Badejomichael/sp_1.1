import { FWproducts1, products4, products5 } from "../data/products.js";
import { FWproductHTML, FW2productHTML, FW3productHTML, FW4productHTML, FW5productHTML, FW6productHTML } from "./script.js";

export function femaleWearSearch(newSearchWord) {
  const firstKeywords = FWproducts1[0].keywords
  if (firstKeywords.includes(newSearchWord)) {
    document.querySelector('.search-results').innerHTML = 
    `
    <p class="Result-header">Results of Search.</p>
      <div class="fww">

      <div class="female-wears">

        <div class="slider-container">
          <div class="slider js-slider1">
          ${FWproductHTML}
          </div>
        </div>

        <div class="sub-female-wears-section">
          <div class="slider-container-2">
            <div class="slider js-slider2"> 
            ${FW2productHTML}
            </div>
          </div>
        </div>
  
      <div class="sub-female-wears-section">
        <div class="slider-container-2">
          <div class="slider js-slider3">
          ${FW3productHTML}
        </div>
  
      </div>
    </div>
       </div>
  

     
    </div>

    `

    document.querySelector('.fw').classList.add('remove-products');
    document.querySelector('.li').classList.add('remove-products');
    document.querySelector('.mc').classList.add('remove-products');
  }  else if (!firstKeywords.includes(newSearchWord)) {
    document.querySelector('.search-results').innerHTML = 'No matching clothes found.';

    document.querySelector('.search-results').classList.add('Result-header-error');

    document.querySelector('.fw').classList.add('remove-products');
    document.querySelector('.li').classList.add('remove-products');
    document.querySelector('.mc').classList.add('remove-products');
    
  }

  if (!document.querySelector('.searchBar').value) {
    document.querySelector('.search-results').innerHTML = 'Invalid search.';

    document.querySelector('.search-results').classList.add('Result-header-error');
    
    document.querySelector('.fw').classList.add('remove-products');
    document.querySelector('.li').classList.add('remove-products');
    document.querySelector('.mc').classList.add('remove-products');
    
  }
}

export function lingerieSearch(newSearchWord) {
  const firstKeywords = products4[0].keywords
  if (firstKeywords.includes(newSearchWord)) {
    document.querySelector('.search-results').innerHTML =
    `
    <p class="Result-header">Results of Search.</p>
      <div class="lii">
    <section class="lingeries">
      <div class="slider-container">
        <div class="slider js-slider4">
        ${FW4productHTML}
      </div>
    </section>
  </div>
    `

    document.querySelector('.fw').classList.add('remove-products');
    document.querySelector('.li').classList.add('remove-products');
    document.querySelector('.mc').classList.add('remove-products');

  }
}

export function nightwearSearch(newSearchWord) {
  const firstKeywords = products5[0].keywords
  if (firstKeywords.includes(newSearchWord)) {
    document.querySelector('.search-results').innerHTML =
    `
    <p class="Result-header">Results of Search.</p>
      <div class="mcc">

        <div class="night-wears">

          <div class="slider-container">
            <div class="slider js-slider5">
              ${FW5productHTML}
          </div>
          </div>

          <div class="sub-female-wears-section">
            <div class="slider-container-2">
                <div class="slider js-slider6">
              ${FW6productHTML}
              </div>
      
            </div>
          </div>
        </div>

      </div>
   
    </div>
    `

    document.querySelector('.fw').classList.add('remove-products');
    document.querySelector('.li').classList.add('remove-products');
    document.querySelector('.mc').classList.add('remove-products');
  }
}