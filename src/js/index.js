// f7c0cce3d19eae6cad084e582751ce9f
// http://food2fork.com/api/search


import axios from 'axios';

// How we handle promises with async await
// SO the result of the value that we start here will then be saved into the res variable
async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'f7c0cce3d19eae6cad084e582751ce9f';
    const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
}

getResults('pizza'); 