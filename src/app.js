// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

// Initial price of the burger
const wholeWheatBunPrice = 10;

// Ingredients of the burger along with the price
const ingredientPrices = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

// Current state of the ingredients in the burger
const state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// Function to render the entire screen every time the state changes accordingly
function renderAll() {
  renderIngredient("Patty");
  renderIngredient("Cheese");
  renderIngredient("Tomatoes");
  renderIngredient("Onions");
  renderIngredient("Lettuce");
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

// Function to render a specific ingredient
function renderIngredient(ingredient) {
  const element = document.getElementById(ingredient.toLowerCase());
  if (state[ingredient]) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// Function to handle ingredient button clicks
function handleIngredientButtonClick(ingredient) {
  state[ingredient] = !state[ingredient];
  renderAll();
}

// Event listeners for ingredient buttons
document.querySelector(".btn-patty").onclick = () => handleIngredientButtonClick("Patty");
document.querySelector(".btn-cheese").onclick = () => handleIngredientButtonClick("Cheese");
document.querySelector(".btn-tomatoes").onclick = () => handleIngredientButtonClick("Tomatoes");
document.querySelector(".btn-onions").onclick = () => handleIngredientButtonClick("Onions");
document.querySelector(".btn-lettuce").onclick = () => handleIngredientButtonClick("Lettuce");

// Function to render active/inactive state of ingredient buttons
function renderButtons() {
  for (const ingredient in state) {
    const button = document.querySelector(`.btn-${ingredient.toLowerCase()}`);
    button.classList.toggle("active", state[ingredient]);
  }
}

// Function to render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  for (const ingredient in state) {
    const item = document.getElementById(`item${ingredient}`);
    item.style.visibility = state[ingredient] ? "visible" : "hidden";
  }
}

// Function to render the price based on selected ingredients
function renderPrice() {
  const basePrice = 2 * wholeWheatBunPrice;
  let totalPrice = basePrice;
  for (const ingredient in state) {
    totalPrice += state[ingredient] ? ingredientPrices[ingredient] : 0;
  }
  document.querySelector(".price-details").innerText = "INR " + totalPrice;
}

// Initial rendering
renderAll();
