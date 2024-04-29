
const retrieveRecipes = localStorage.getItem('recipe');
const recipeObject = JSON.parse(retrieveRecipes);

const retrieveWholeRecipe = localStorage.getItem('wholeRecipe');
const wholeRecipeObject = JSON.parse(retrieveWholeRecipe);

    function pageSetup() {
        recipeObject.forEach(card => {
            const recipeTemplate = document.getElementById('recipe-template');
            const cloneRecipeCard = recipeTemplate.content.cloneNode(true);

            cloneRecipeCard.querySelector('img').src = card.recipeImg;
            cloneRecipeCard.querySelector('h3').innerHTML = card.recipeTitle;
            cloneRecipeCard.querySelector('p').innerHTML = card.recipeDesc;

            document.querySelector('.display-recipes').appendChild(cloneRecipeCard);
        })


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


