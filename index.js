//render function
function renderRecipes(recipeArray) {
  let recipeHTML = recipeArray.map(function (currentRecipe) {
    return `  <div class=recipe>
            <div class="card" style="width: 18rem;">
            <img src=${currentRecipe.image}>
            <div class="card-body">
              <h5 class="recipe-title">${currentRecipe.title}</h5>
              <p class="recipe-ingredients">${renderIngredients(
                currentRecipe.extendedIngredients
              )}</p>
              <p class="recipe-description">${renderSteps(
                currentRecipe.analyzedInstructions[0].steps
              )}</p>
            </div>
            </div>
          </div>`;
  });
  return recipeHTML.join("");
}

//render function for random cocktail:
function renderCocktail(cocktailArray) {
  let cocktailHTML = cocktailArray.map(function (currentCocktail) {
    let cocktailString = `  <div class=cocktail>
            <div class="card" style="width: 18rem;">
            <img src=${currentCocktail.strDrinkThumb}>
            <div class="card-body">
              <h5 class="cocktail-title">${currentCocktail.strDrink}</h5>`;

              if (currentCocktail.strIngredient1 != null){
                cocktailString += `<p>${currentCocktail.strMeasure1} ${currentCocktail.strIngredient1}</p>`
              }
              if (currentCocktail.strIngredient2 != null){
                cocktailString += `<p>${currentCocktail.strMeasure2} ${currentCocktail.strIngredient2}</p>`
              }
              if (currentCocktail.strIngredient3 != null){
                cocktailString += `<p>${currentCocktail.strMeasure3} ${currentCocktail.strIngredient3}</p>`
              }
              if (currentCocktail.strIngredient4 != null){
                cocktailString += `<p>${currentCocktail.strMeasure4} ${currentCocktail.strIngredient4}</p>`
              }
              if (currentCocktail.strIngredient5 != null){
                cocktailString += `<p>${currentCocktail.strMeasure5} ${currentCocktail.strIngredient5}</p>`
              }
     cocktailString += `
              <div class="cocktail-instructions">
              ${currentCocktail.strInstructions}
              </div>
              </div>
            </div>
          </div>`;

          return cocktailString;
  });
  return cocktailHTML.join("");
}


//function for handling submit event
let handleSubmit = (event) => {
  event.preventDefault();
  console.log(event);
  console.log(event.target.cuisine.value);

  //fetch recipe API
  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=78d7dfa988514b18b52ac1ab9f833947&cuisine=${event.target.cuisine.value}&addRecipeInformation=true&fillIngredients=true`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      results.innerHTML = renderRecipes(data.results);
    });
};

function renderIngredients(ingredientsArray) {
  let ingredientsHTML = ingredientsArray.map(function (currentIngredient) {
    return `<p>${currentIngredient.original}</p>`;
  });
  return ingredientsHTML.join("");
}

function renderSteps(stepsArray) {
  let stepsHTML = stepsArray.map(function (currentStep) {
    // console.log(currentStep[0].steps);
    return `<p>${currentStep.step}</p>`;
  });

  return stepsHTML.join("");
}

let handleButton = (event) => {
  console.log(event);

  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
     .then((response) => response.json())
     .then((data) => {
     console.log(data);
     cocktailBtn.innerHTML = renderCocktail(data.drinks);
   })
}
//adding event listener to cuisine submit button
let submit = document.getElementById("cuisine-form");
let results = document.getElementById("result");
let cocktailBtn = document.getElementById("cocktail");
cocktailBtn.addEventListener("click", handleButton);
submit.addEventListener("submit", handleSubmit);

