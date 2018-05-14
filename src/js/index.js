import Search from './models/Search';
import * as searchView from './views/searchView'
import { elements } from './views/base';

/* Global state of the app
    - Search Object
    - Current recipe object
    - Shopping list object
    - Liked recipe
 */
const state = {};

const controlSearch = async () => {
    // 1. get query from view
    const query = searchView.getInput();

    if(query) {
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for result

        // 4. Search for recipe
        await state.search.getResults();

        // 5. Render results on UI
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});