const BASE_URL = 'https://pixabay.com/api/';
const KEY = '22938064-7e67cff9dc13648fb3a6e967b';

export default class PhotoApiServer {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;

    return fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Image ${this.searchQuery} not found`));
    });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
