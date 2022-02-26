//render function
function renderRecipes(recipeArray) {
  let recipeHTML = recipeArray.map(function (currentRecipe) {
    return `  <div class=recipe>
          <div class="card" style="width: 18rem;">
          <img src=${currentRecipe.image}>
          <div class="card-body">
            <h5 class="recipe-title">${currentRecipe.title}</h5>
            <p class="recipe-ingredients">${currentRecipe.extendedIngredients}</p>
            <p class="recipe-description">${currentRecipe.analyzedInstructions}</p>
          </div>
          </div>
        </div>`
  })
  return recipeHTML.join('');
}

//function for handling submit event
let handleSubmit = (event) => {
  event.preventDefault();
  console.log(event);

  //fetch recipe API
  fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=78d7dfa988514b18b52ac1ab9f833947&cuisine=italian&addRecipeInformation=true&fillIngredients=true")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      results.innerHTML = renderRecipes(data.results);
    });
}

//adding event listener to cuisine submit button
let submit = document.getElementById('submitBtn');
let results = document.getElementById("result");
submit.addEventListener("click", handleSubmit);


  //fetch cocktail API
 // fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
 //   .then((response) => response.json())
  //  .then((data) => console.log(data));