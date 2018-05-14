import { elements } from './base';

export const getInput = () => elements.searchInput.value;


// Clear the input field
export const clearInput = () => {
    elements.searchInput.value = ''; 
}

// Clear the results from previous search
export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
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
};


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
};


// type: 'prev' or 'next'
const createButton = (page, type) => `

    <button class="btn-inline results__btn--${type}" data-goto= ${type === 'prev' ? page -1 : page + 1} >
        <span>Page ${type === 'prev' ? page -1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;



const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let button;

    if (page === 1 && pages > 1) {
        // Only button to go to next page
        button = createButton(page, 'next');
    } else if (page < pages) {
        // Both buttons
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        // Only button to go to prev page
        button = createButton(page, 'prev');
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    // render result of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);

    // render pagination button
    renderButtons(page, recipes.length, resPerPage);
};

