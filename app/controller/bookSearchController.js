app.controller('bookSearchController', function ($scope, bookService) {
    $scope.books = [];
    $scope.bookDetails = null;
    $scope.searchQuery = '';
    $scope.loading = false;

    // Search books based on a query
    $scope.searchBooks = function () {
        if ($scope.searchQuery) {
            $scope.loading = true;
            bookService.searchBooks($scope.searchQuery)
                .then(function (data) {
                    if (data && data.items && data.items.length > 0) {
                        $scope.books = data.items; // Assuming we're showing all book results
                        $scope.error = null;
                    } else {
                        $scope.books = [];
                        $scope.error = 'No books found. Please try a different query.';
                    }
                    $scope.loading = false;
                })
                .catch(function () {
                    $scope.error = 'Error fetching books. Please try again later.';
                    $scope.books = [];
                    $scope.loading = false;
                });
        } else {
            $scope.error = 'Please enter a search query.';
            $scope.books = [];
        }
    };
    

    $scope.searchforBooks = function () {
        if (!$scope.searchQuery.trim()) {
            alert('Please enter a search query.');
            return;
        }

        $scope.loading = true;
        bookService.searchforBooks($scope.searchQuery)
            .then(data => {
                if (data && data.items) {
                    console.log("searchforBooks")
                    $scope.books = data.items;
                } else {
                    $scope.books = [];
                    alert('No books found for the given query.');
                }
                $scope.loading = false;
            })
            .catch(error => {
                console.error('Error searching books:', error);
                alert('An error occurred while searching for books.');
                $scope.loading = false;
            });
    };
    
    // Get book details by ID
    $scope.getBookDetails = function (bookId) {
        $scope.loading = true;
        bookService.getBookDetails(bookId)
            .then(data => {
                if (data) {
                    $scope.bookDetails = data;
                } else {
                    $scope.bookDetails = null;
                    alert('Book details not found.');
                }
                $scope.loading = false;
            })
            .catch(error => {
                console.error('Error fetching book details:', error);
                alert('An error occurred while fetching book details.');
                $scope.loading = false;
            });
    };

    // Get default list of books
    $scope.getBooks = function () {
        $scope.loading = true;
        bookService.getBooks()
            .then(data => {
                if (data && data.items) {
                    $scope.books = data.items;
                } else {
                    $scope.books = [];
                    alert('No books found.');
                }
                $scope.loading = false;
            })
            .catch(error => {
                console.error('Error fetching books:', error);
                alert('An error occurred while fetching books.');
                $scope.loading = false;
            });
    };
});