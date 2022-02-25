//function for handling submit event
let handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(event);

//fetch??
    fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=78d7dfa988514b18b52ac1ab9f833947&cuisine=italian").then((response) => {
    response.json();    
    console.log(response)
  });

}
//adding event listener to cuisine submit button
let submit = document.getElementById('submitBtn');
submit.addEventListener("click", handleSubmit);