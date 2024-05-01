
//  Preview card
const recipe = (recipeImg, recipeTitle, recipeDesc) => ({recipeImg,  recipeTitle, recipeDesc});

// Saved images
const recipeImage = {
    recipe1: 'assets/media/275576-easy-air-fryer-pork-chops-DDMFS-4x3-b2d7316498cd4d25901f403958754d31.webp',
    recipe2: 'assets/media/238691-Simple-Macaroni-And-Cheese-mfs_006-f7f521c65f894aef85e17bc9125c2c4a.jpg',
    recipe3: 'assets/media/7638600-fbf9ba8915004a738bc7fd4564228cae.webp'
};
// Sets recipe name
const recipeName = {
    recipe1: 'Air Fryer Pork Chops',
    recipe2: 'Macaroni and Cheese',
    recipe3: 'Spicy Baked Shrimp'
}
const recipeDecs = {
    recipe1: 'Use your trusty air fryer to make the best (and easiest) pork chops of your life. Trust us — once you try this air fryer pork chop recipe, you\'ll never go back to your old method again.',

    recipe2: 'Quick, easy, and tasty macaroni and cheese dish. Fancy, designer mac and cheese often costs forty or fifty dollars to prepare when you have so many expensive cheeses, but they aren\'t always the best tasting.',

    recipe3: 'These spicy baked shrimp are made with a perfect blend of spices! So easy and quick to make!'
}


const displayRecipe = [
    recipe(recipeImage.recipe1, recipeName.recipe1, recipeDecs.recipe1),
    recipe(recipeImage.recipe2, recipeName.recipe2, recipeDecs.recipe2),
    recipe(recipeImage.recipe3, recipeName.recipe3, recipeDecs.recipe3)
];




//  set and access whole recipe
const wholeRecipe = (recipeImg, recipeServings, recipeTitle, recipeDesc, recipePrep, recipeDifficulty, recipeIngredients, recipeInstructions) => ({recipeImg, recipeServings, recipeTitle, recipeDesc, recipePrep, recipeDifficulty, recipeIngredients, recipeInstructions});

const wholeRecipeImage = {
    recipe1: 'assets/media/275576-easy-air-fryer-pork-chops-DDMFS-4x3-b2d7316498cd4d25901f403958754d31.webp',
    recipe2: 'assets/media/238691-Simple-Macaroni-And-Cheese-mfs_006-f7f521c65f894aef85e17bc9125c2c4a.jpg',
    recipe3: 'assets/media/7638600-fbf9ba8915004a738bc7fd4564228cae.webp'
};
const wholeRecipeServings = {
    recipe1: '4',
    recipe2: '4',
    recipe3: '4'
}
const wholeRecipeName = {
    recipe1: 'Air Fryer Pork Chops',
    recipe2: 'Macaroni and Cheese',
    recipe3: 'Spicy Baked Shrimp'
}
const wholeRecipeDecs = {
    recipe1: 'Use your trusty air fryer to make the best (and easiest) pork chops of your life. Trust us — once you try this air fryer pork chop recipe, you\'ll never go back to your old method again.',

    recipe2: 'Quick, easy, and tasty macaroni and cheese dish. Fancy, designer mac and cheese often costs forty or fifty dollars to prepare when you have so many expensive cheeses, but they aren\'t always the best tasting. This simple recipe is cheap and tasty.',

    recipe3: 'These spicy baked shrimp are made with a perfect blend of spices! So easy and quick to make!'
}
const wholeRecipePrepTime = {
    recipe1: '5',
    recipe2: '10',
    recipe3: '10'
}
const wholeRecipeDifficultyRating = {
    recipe1: 'easy',
    recipe2: 'medium',
    recipe3: 'easy'
}
let wholeRecipeIngredients = [
    {
        recipe1: [
            '½ cup grated Parmesan cheese',
            '1 teaspoon paprika',
            '1 teaspoon garlic powder',
            '1 teaspoon kosher salt',
            '1 teaspoon dried parsley',
            '½ teaspoon ground black pepper',
            '4 (5 ounce) boneless pork chops',
            '2 tablespoons extra virgin olive oil'
        ]
    },
    {
        recipe2: [
            '1 (8 ounce) box elbow macaroni',
            '¼ cup butter',
            '¼ cup all-purpose flour',
            '½ teaspoon salt',
            'ground black pepper to taste',
            '2 cups milk',
            '2 cups shredded Cheddar cheese'
        ]
    },
    {
        recipe3: [
            '½ cup olive oil',
            '2 tablespoons Cajun seasoning',
            '2 tablespoons lemon juice',
            '2 tablespoons chopped fresh parsley',
            '1 tablespoon honey',
            '1 tablespoon soy sauce',
            '1 pinch cayenne pepper',
            '1 pound uncooked shrimp, peeled and deveined',
            'cooking spray'
        ]
    }
];
const wholeRecipeInstructions = [
    {
        recipe1: [
            'Preheat the air fryer to 380 degrees F (190 degrees C).',
            'Combine Parmesan cheese, paprika, garlic powder, salt, parsley, and pepper in a flat shallow dish; mix well.',
            'Coat each pork chop with olive oil. Dredge both sides of each chop in the Parmesan mixture and set on a plate.',
            'Place 2 chops in the basket of the air fryer and cook for 10 minutes; flipping halfway through cook time. Transfer to a cutting board and let rest for 5 minutes. Repeat with remaining chops.',
            'Place 2 chops in the basket of the air fryer and cook for 10 minutes; flipping halfway through cook time. Transfer to a cutting board and let rest for 5 minutes. Repeat with remaining chops.'
        ]
    },
    {
        recipe2: [
            'Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes.',
            'At the same time, melt butter in a saucepan over medium heat.',
            'Add flour, salt, and pepper and stir until smooth, about 5 minutes.',
            'Pour in milk slowly, while stirring continuously. Continue to cook and stir until mixture is smooth and bubbling, about 5 minutes, making sure the milk doesn\'t burn.',
            'Add Cheddar cheese and stir until melted, 2 to 4 minutes.',
            'Drain macaroni and fold into cheese sauce until coated.',
            'Serve hot and enjoy!',
        ]
    },
    {
        recipe3: [
            'Whisk olive oil, Cajun seasoning, lemon juice, parsley, honey, soy sauce, and cayenne pepper together in a large glass or ceramic bowl. Add shrimp and toss to evenly coat. Cover the bowl with plastic wrap and marinate in the refrigerator for 1 hour.',
            'Preheat the oven to 450 degrees F (230 degrees C). Spray a baking dish with cooking spray.',
            'Transfer shrimp into the prepared baking dish and pour any remaining marinade over top.',
            'Bake in the preheated oven until shrimp are bright pink on the outside and the meat is opaque, about 10 minutes.'
        ]
    }
];
const recipeKeys = Object.keys(wholeRecipeImage);
const displayWholeRecipe = recipeKeys.map((key, index) =>
    wholeRecipe(
        wholeRecipeImage[key],
        wholeRecipeServings[key],
        wholeRecipeName[key],
        wholeRecipeDecs[key],
        wholeRecipePrepTime[key],
        wholeRecipeDifficultyRating[key],
        wholeRecipeIngredients[index][key],
        wholeRecipeInstructions[index][key]
    )
);



// store to local storage
const jsonRecipes = JSON.stringify(displayRecipe);
localStorage.setItem('recipe', jsonRecipes);

const jsonWholeRecipe = JSON.stringify(displayWholeRecipe);
localStorage.setItem('wholeRecipe', jsonWholeRecipe);




