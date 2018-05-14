
// Import
import str from './models/Search';

// import by specific function from a document
// import {add as a, multiply as m, ID} from './views/searchView';

//Import basically everything
import * as searchView from './views/searchView';

// console.log(`Using imported function! ${a(ID, 2)} and ${m(3,5)}. ${str}`);

console.log(`Using imported function! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(searchView.ID,5)}. ${str}`);