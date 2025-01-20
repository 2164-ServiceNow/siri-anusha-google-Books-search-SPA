app.controller('bookController', function ($scope, bookService) {
    $scope.books = [];
    $scope.bookDetails = null;
    $scope.searchQuery = '';
    $scope.loading = false;

    // Search books based on a query
    $scope.searchBooks = function () {
        $scope.loading = true;
        bookService.searchBooks($scope.searchQuery).then(data => {
            $scope.books = data.items || [];
            $scope.loading = false;
        }).catch(() => {
            $scope.loading = false;
        });
    };

    // Get book details by ID
    $scope.getBookDetails = function (bookId) {
        $scope.loading = true;
        bookService.getBookDetails(bookId).then(data => {
            $scope.bookDetails = data;
            $scope.loading = false;
        }).catch(() => {
            $scope.loading = false;
        });
    };

    // Get default list of books
    $scope.getBooks = function () {
        $scope.loading = true;
        bookService.getBooks().then(data => {
            $scope.books = data.items || [];
            $scope.loading = false;
        }).catch(() => {
            $scope.loading = false;
        });
    };
});
