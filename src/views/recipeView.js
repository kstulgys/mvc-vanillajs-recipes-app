import { elements } from './DOMelements'

export const clearRecipe = () => {
  elements.recipe.innerHTML = ''
}

const createIngredient = ({ weight, text }) => {
  return `
    <li class="recipe__item">
    <div class="recipe__icon">
        <i class="far fa-check-circle fa-lg"></i>
    </div>
    <div class="recipe__ingredient">
    ${text} (${Math.round(weight)}g)
    </div>
    </li>
    `
}
{
  /* <span class="recipe__unit">g</span>
  /* <div class="recipe__count">${Math.round(weight)}</div> */
}

export const renderRecipe = ({
  ingredients,
  cookingTime,
  servings,
  url,
  label,
  id,
  image
}) => {
  const recipeHTML = `
    <figure class="recipe__fig">
    <img src=${image} class='recipe__img' />
    <h1 class="recipe__title">
      <span>${label}</span>
    </h1>
  </figure>
  <div class="recipe__details">
    <div class="recipe__info">
    <div class="recipe__info-icon">
    <i class="far fa-clock fa-lg"></i>
    </div>
      <span class="recipe__info-data recipe__info-data--minutes">${cookingTime}</span>
      <span class="recipe__info-text"> minutes</span>
    </div>
    <div class="recipe__info">
      <div class="recipe__info-icon">
         <i class="fas fa-male fa-lg"></i>
      </div>
      <span class="recipe__info-data recipe__info-data--people">${servings}</span>
      <span class="recipe__info-text">servings</span>
      <div class="recipe__info-buttons">
        <button class="btn-tiny">
        <i class="fas fa-minus-circle fa-lg"></i>
        </button>
        <button class="btn-tiny">
        <i class="fas fa-plus-circle fa-lg"></i>
        </button>
      </div>
    </div>
    <button class="recipe__love">
      <div class="header__likes">
      <i class="far fa-heart fa-2x"></i>
      </div>
    </button>
  </div>
  <div class="recipe__ingredients">
    <ul class="recipe__ingredient-list">
    ${ingredients.map(el => createIngredient(el)).join('')}
    </ul>
    <button class="btn-small recipe__btn">
      <div class="search__icon">
      <i class="fas fa-cart-arrow-down fa-lg"></i>
      </div>
      <span>Add to shopping list</span>
    </button>
  </div>
  <div class="recipe__directions">
    <h2 class="heading-2">How to cook it</h2>

    <a
      class="btn-small recipe__btn"
      href=${url}
      target="_blank"
    >
      <span>Get directions</span>
      <div class="search__icon">
      <i class="fas fa-directions fa-lg"></i>
      </div>
    </a>
  </div>
  `
  elements.recipe.insertAdjacentHTML('beforeend', recipeHTML)
}

{
  /* <p class="recipe__directions-text">
This recipe was carefully designed and tested by
<span class="recipe__by">The Pioneer Woman</span>. Please check out
directions at their website.
</p> */
}