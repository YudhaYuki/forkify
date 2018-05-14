import axios from 'axios';
import { key, proxy } from '../config';


export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/`)
        } catch (error) {
            console.log(error);
        }
    }
}