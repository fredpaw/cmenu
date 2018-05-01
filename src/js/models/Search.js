// c6a86f2fe07227a62609175c2365c569
// http://food2fork.com/api/search

import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'c6a86f2fe07227a62609175c2365c569';
  
    try {
      const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      //console.log(this.result);
    } catch (error) {
      console.log(error);
    }  
  }
}