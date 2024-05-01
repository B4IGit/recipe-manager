function pageSetup() {
//
//
// Variable to store recipes
let recipes = [];
console.log(recipes)
// Access the form element
const form = document.getElementById('ingredientForm');
// Add submit event listener to form
form.addEventListener('submit', function() {

    //
    //
    // Create a new recipe object based on the form's values
    let recipe = {
        name: document.getElementById('name').value,
        serving: document.getElementById('serving').value,
        image: document.getElementById('recipe-image').value,
        description: document.getElementById('description').value,
        prepTime: {
            hours: document.getElementById('hours').value,
            minutes: document.getElementById('minutes').value
        },
        difficulty: document.getElementById('difficulty').value,
        ingredients: [],
        instructions: document.getElementById('instructions').value.split('\n'),
    };

    const ingredientContainers = document.querySelectorAll('.add-ingredient-div');
    for (let i = 0; i < ingredientContainers.length; i++) {
        let ingredientContainer = ingredientContainers[i];
        const ingredient = {
            ingredient: ingredientContainer.querySelector('[name="ingredient"]').value,
            quantity: ingredientContainer.querySelector('[name="quanity"]').value,
            measurement: ingredientContainer.querySelector('[name="measurement"]').value,
        };
        recipe.ingredients.push(ingredient);
    }

    // Add new recipe to recipes array
    recipes.push(recipe);

    //
    //
    // Save the updated recipes array to local storage
    localStorage.setItem('recipes', JSON.stringify(recipes));
    console.log(JSON.parse(localStorage.getItem('recipes')));
});

    //
    //
    // Get the add ingredient button
    const addIngredientBtn = document.getElementById('add-ingredient');

    // Add click event listener to add ingredient button
    addIngredientBtn.addEventListener('click', function() {
        // Get the template and container elements
        const template = document.getElementById('add-ingredient-template');
        const container = document.getElementById('ingredient-container');

        // Clone the template content
        const clone = document.importNode(template.content, true);

        // Append the cloned content to the container
        container.appendChild(clone);
    });

    //
    //
    // Get the add instructions button
    const addInstructionBtn = document.getElementById('add-instruction');

    // Add click event listener to add instruction button
    addInstructionBtn.addEventListener('click', function() {
        // Get the template and container elements
        const template = document.getElementById('add-instruction-template');
        const container = document.getElementById('instructions-container');

        // Clone the template content
        const clone = document.importNode(template.content, true);

        // Append the cloned content to the container
        container.appendChild(clone);
    });
}   // End pageSetup()