import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    // async method 
    async getResults(query) {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'f7c0cce3d19eae6cad084e582751ce9f';
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}