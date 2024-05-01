//  *
//  *
//  *
//  TODO:
//  when view btn is clicked, show ALL recipe data from local storage
//  (remove hard coded elements - to focus on the form data)
//  serving sizes need to be updated when btns are clicked
//  *
//  *
//  *
//  RESUME:
//  passing the data through the whole recipe template the view recipe btn is clicked
//  update the array so it passes unlimited recipes
//  *
//  *
//  *
//  Problems:
//  array is accepting ONLY 1 @ a time
//  *
//  *
//  *

const retrieveRecipes = localStorage.getItem('recipe');
const recipeObject = JSON.parse(retrieveRecipes);

const retrieveWholeRecipe = localStorage.getItem('wholeRecipe');
const wholeRecipeObject = JSON.parse(retrieveWholeRecipe);

    function pageSetup() {


        //
        //
        // Displays recipes that are hard-coded
      recipeObject.forEach(card => {
            const recipeTemplate = document.getElementById('recipe-template');
            const cloneRecipeCard = recipeTemplate.content.cloneNode(true);

            cloneRecipeCard.querySelector('img').src = card.recipeImg;
            cloneRecipeCard.querySelector('h3').innerHTML = card.recipeTitle;
            cloneRecipeCard.querySelector('p').innerHTML = card.recipeDesc;

            document.querySelector('.display-recipes').appendChild(cloneRecipeCard);
        })

        //
        //
        // Displays recipe that was entered from the form
        let storedRecipes = JSON.parse(localStorage.getItem('recipes'));
        console.log(storedRecipes);

        // Get a reference to the template and the container
        const template = document.getElementById('recipe-template');
        const container = document.querySelector('.display-recipes');

        // For each recipe in the stored array
        storedRecipes.forEach(recipe => {
            // Clone the template content
            let clone = template.content.cloneNode(true);

            // Populate the clone with data from the current recipe
            clone.querySelector('img').src = recipe.image;
            clone.querySelector('h3').textContent = recipe.name;
            clone.querySelector('p').textContent = recipe.description;

            // Append the populated clone to the container
            container.appendChild(clone);
        });


        //
        //
        // Display all the recipe information (hard-coded)
        const buttons = document.querySelectorAll('.prevRecipe button');

        const handleCloseBtn = function () {
            let recipeDiv = document.querySelector('.recipes-div');
            if (recipeDiv.lastElementChild) {
                recipeDiv.lastElementChild.remove();
            }
            recipeDiv.style.display = 'none';
        };

        buttons.forEach(function (button, index) {
            button.addEventListener('click', function () {
                const recipeDiv = document.querySelector('.recipes-div');
                let wholeRecipeTemplate = document.getElementById('whole-recipe-template');

                if (recipeDiv.style.display === 'none' || recipeDiv.style.display === '') {
                    recipeDiv.style.display = 'block';

                    const cloneWholeRecipeCard = wholeRecipeTemplate.content.cloneNode(true);

                    cloneWholeRecipeCard.querySelector('img').src = displayWholeRecipe[index].recipeImg;
                    cloneWholeRecipeCard.querySelector('h3 span').innerHTML = displayWholeRecipe[index].recipeServings;
                    cloneWholeRecipeCard.querySelector('h2').innerHTML = displayWholeRecipe[index].recipeTitle;
                    cloneWholeRecipeCard.querySelector('p').innerHTML = displayWholeRecipe[index].recipeDesc;
                    cloneWholeRecipeCard.querySelector('#prep-time').innerHTML = displayWholeRecipe[index].recipePrep;
                    cloneWholeRecipeCard.querySelector('#difficulty').innerHTML = displayWholeRecipe[index].recipeDifficulty;

                    displayWholeRecipe[index].recipeIngredients.forEach(function (item) {
                        let newLine = document.createElement('li');
                        newLine.innerHTML = item;
                        cloneWholeRecipeCard.querySelector('.ingredients').append(newLine);
                    });

                    displayWholeRecipe[index].recipeInstructions.forEach(function (item, idx) {
                        let newLine = document.createElement('p');
                        newLine.innerHTML = `<br><strong>Step ${idx + 1}:</strong><br>${item}`;
                        cloneWholeRecipeCard.querySelector('.instructions').append(newLine);
                    });

                    cloneWholeRecipeCard.querySelector('#showIngredientsBtn').addEventListener('click', function () {
                        let content = this.querySelector('.content');
                        content.style.display = content.style.display === 'none' ? 'block' : 'none';
                    });

                    cloneWholeRecipeCard.querySelector('#showInstructionsBtn').addEventListener('click', function () {
                        let content = this.querySelector('.content');
                        content.style.display = content.style.display === 'none' ? 'block' : 'none';
                    });

                    const closeBtn = cloneWholeRecipeCard.querySelector('#closeBtn');
                    closeBtn.addEventListener('click', handleCloseBtn);

                    recipeDiv.appendChild(cloneWholeRecipeCard);
                }
            });
        });
    }


