app.controller('bookDetailsController', function ($scope, $routeParams, bookService) {
    var bookName = $routeParams.bookName.replace(/-/g, ' '); // Convert hyphens back to spaces
    $scope.loading = true;

    // Function to get book details by title
    $scope.fetchBookDetails = function (bookName) {
        bookService.getBooks(1).then(function (data) {
            if (data && data.results) {
                var book = data.results.find(function (book) {
                    return book.title.toLowerCase() === bookName.toLowerCase(); // Match book by title
                });
                if (book) {
                    $scope.book = book;
                } else {
                    console.error('Book not found');
                }
            }
            $scope.loading = false;
        });
    };

    // Fetch Book details by name
    $scope.fetchBookDetails(bookName);
});