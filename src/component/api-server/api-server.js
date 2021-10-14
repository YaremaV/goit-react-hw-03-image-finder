const BASE_URL = 'https://pixabay.com/api/';
const KEY = '22938064-7e67cff9dc13648fb3a6e967b';

// function fetchImages(searchQuery, incrementPage) {
//   return fetch(
//     `${BASE_URL}?q=${searchQuery}&page=${incrementPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//   });
// }

// const api = { fetchImages };
// export default api;

export default class PhotoApiServer {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;

    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(({ hits }) => {
        if (hits.length === 0) {
          return 'error';
        }
        this.incrementPage();
        return hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
