import { FWproducts, LIproducts, MCproducts } from "../data/products.js";
import { FWproductHTML, LIproductHTML, MCproductHTML } from "./script.js";

export function femaleWearSearch(newSearchWord) {
  const firstKeywords = FWproducts[0].keywords
  if (firstKeywords.includes(newSearchWord)) {
    document.querySelector('.search-results').innerHTML = 
    `
    <p class="Result-header">Results of Search.</p>
    <div class="row products-row js-products-row-1">
     ${FWproductHTML}
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
  const firstKeywords = LIproducts[0].keywords
  if (firstKeywords.includes(newSearchWord)) {
    document.querySelector('.search-results').innerHTML =
    `
    <p class="Result-header">Results of Search.</p>
    <div class="row products-row js-products-row-1">
     ${LIproductHTML}
    </div>
    `

    document.querySelector('.fw').classList.add('remove-products');
    document.querySelector('.li').classList.add('remove-products');
    document.querySelector('.mc').classList.add('remove-products');

  }
}

export function nightwearSearch(newSearchWord) {
  const firstKeywords = MCproducts[0].keywords
  if (firstKeywords.includes(newSearchWord)) {
    document.querySelector('.search-results').innerHTML =
    `
    <p class="Result-header">Results of Search.</p>
    <div class="row products-row js-products-row-1">
     ${MCproductHTML}
    </div>
    `

    document.querySelector('.fw').classList.add('remove-products');
    document.querySelector('.li').classList.add('remove-products');
    document.querySelector('.mc').classList.add('remove-products');
  }
}