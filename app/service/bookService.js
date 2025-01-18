app.service('bookService', function ($http) {
    const BASE_URL = 'https://www.googleapis.com/books/v1';
    const SEARCH_URL = `${BASE_URL}/volumes`; // Endpoint to search for books
    const API_KEY = 'AIzaSyBN3tQZ2EA5thCZiBw6tmbl0qQxUbETCSM';

    // Fetch a list of books based on a query
    this.getBooks = function (query, startIndex = 0, maxResults = 10) {
        return $http.get(`${SEARCH_URL}?q=${encodeURIComponent(query)}&startIndex=${startIndex}&maxResults=${maxResults}&key=${API_KEY}`)
            .then(response => response.data)
            .catch(error => {
                console.error(`Error fetching books with query "${query}":`, error);
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
});
