let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let ingredientsList = recipeObj.ingredients;

let recipeTitleElement = document.getElementById("recipeTitle");
let imgContainerElement = document.getElementById("imgContainer");
let imgElement = document.getElementById("img");
let ingredientListContainerElement = document.getElementById("ingredientListContainer");

recipeTitleElement.textContent = recipeObj.title;
imgElement.setAttribute("src", recipeObj.imgSrc);
imgElement.classList.add("w-100");
imgContainerElement.appendChild(imgElement);

for (let eachIngredient of ingredientsList) {
    let ingredientsElement = document.createElement("li");
    ingredientsElement.textContent = eachIngredient;
    ingredientsElement.classList.add("eachIngredient");
    ingredientListContainerElement.appendChild(ingredientsElement);
}
