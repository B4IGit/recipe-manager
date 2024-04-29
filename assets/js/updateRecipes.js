let recipe1 = {
    servings: 4,
    ingredients: {
        'grated Parmesan cheese': { quantity: 1/2, unit: 'cup.' },
        'onion': { quantity: 1, unit: "teaspoon" },
        'garlic powder': { quantity: 1, unit: 'teaspoon' },
        'kosher salt': { quantity: 1, unit: 'teaspoon' },
        'dried parsley': { quantity: 1, unit: 'teaspoon' },
        'ground black pepper': { quantity: 1/2, unit: 'teaspoon' },
        'boneless pork chops': { quantity: 4, unit: '5 ounce' },
        'extra virgin olive oil': { quantity: 2, unit: 'tablespoons' }
    }
};
let displayWholeRecipeArr = [recipe1];
function handleRecipeDisplay(index, servingSizeMultiplier) {
    const recipe = displayWholeRecipeArr[index];
    displayRecipe(recipe, servingSizeMultiplier);
}

buttons.forEach(function (button, index) { //This is the start of the forEach loop containing your code
    //existing template cloning code here..

    cloneWholeRecipeCard.querySelector('.half-recipe').addEventListener('click', function () {
        handleRecipeDisplay(index, 0.5); // Run display function for half servings
    });

    cloneWholeRecipeCard.querySelector('.reg-recipe').addEventListener('click', function () {
        handleRecipeDisplay(index, 1); // Run display function for regular servings
    });

    cloneWholeRecipeCard.querySelector('.dbl-recipe').addEventListener('click', function () {
        handleRecipeDisplay(index, 2); // Run display function for double servings
    });

    //existing template cloning code
});