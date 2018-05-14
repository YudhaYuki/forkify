import { elements } from './base';

export const getInput = () => elements.searchInput.value;


// Clear the input field
export const clearInput = () => {
    elements.searchInput.value = ''; 
}

// Clear the results from previous search
export const clearResults = () => {
    elements.searchResList.innerHTML = '';
}


/*
    PASTA with tomato and spinach
    0 (Fist accumulator) / acc + cur.length = 5 / newTitle = ['Pasta']
    5 (2nd accumulator) / acc + cur.length = 9 / newTitle = ['Pasta, 'with']
    9 (2nd accumulator) / acc + cur.length = 15 / newTitle = ['Pasta, 'with', 'Tomato']
    15 (2nd accumulator) / acc + cur.length = 18 / newTitle = ['Pasta, 'with', 'Tomato']
    18 (2nd accumulator) / acc + cur.length = 24 / newTitle = ['Pasta, 'with', 'Tomato']
*/
const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        // return the result
        return `${newTitle.join(' ')} ...`;
    }
    return title;
}


const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    ` ;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};

