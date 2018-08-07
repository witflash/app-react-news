import axios from 'axios';

class Api {
  API_URL = 'http://localhost:3003/articles';
  data = [];

  getNews() {
    axios.get(this.API_URL).then(response => {
      const news = response.data;
      this.data = news;
    });
  }
}

export default Api;
