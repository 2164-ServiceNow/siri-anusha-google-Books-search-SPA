app.service('bookService', function ($http) {
    const BASE_URL = 'https://www.googleapis.com/books/v1';
    const SEARCH_URL = `${BASE_URL}/volumes`; // Endpoint to search for books
    const API_KEY = 'AIzaSyBN3tQZ2EA5thCZiBw6tmbl0qQxUbETCSM'; // Replace with your Google API Key

    // Fetch a list of books based on a query
    this.searchBooks = function (query, page = 1, maxResults = 10) {
        return $http.get(`${SEARCH_URL}?q=${encodeURIComponent(query)}&startIndex=${(page - 1) * maxResults}&maxResults=${maxResults}&key=${API_KEY}`)
            .then(response => response.data)
            .catch(error => {
                console.error(`Error searching for books with query "${query}":`, error);
                return null;
            });
    };

    // Fetch detailed information about a specific book by its ID
    this.getBookDetails = function (bookId) {
        return $http.get(`${SEARCH_URL}/${bookId}?key=${API_KEY}`)
            .then(response => response.data)
            .catch(error => {
                console.error(`Error fetching book details for ID "${bookId}":`, error);
                return null;
            });
    };

    // Fetch popular books (Not available in Google Books API, so using a random set or a pre-defined query)
    this.getBooks = function (page = 1, maxResults = 10) {
        return this.searchBooks('bestsellers', page, maxResults);
    };
});
