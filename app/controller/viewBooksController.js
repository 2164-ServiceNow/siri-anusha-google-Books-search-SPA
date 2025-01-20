app.controller('viewBooksController', function ($scope, $location, bookService) {
    $scope.books = [];
    $scope.currentPage = 1;
    $scope.searchTerm = '';
    $scope.loading = true;

    $scope.fetchBooks = function (page) {
        $scope.loading = true;
        bookService.getBooks(page).then(function (data) {
            if (data && data.results) {
                $scope.books = data.results;
            } else {
                console.error('No book data received');
            }
            $scope.loading = false;
        });
    };
    
    $scope.goToDetails = function (bookTitle) {
        var formattedTitle = bookTitle.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with hyphens and make lowercase
        $location.path('/book/' + formattedTitle); // Redirect to book details
    };

    $scope.nextPage = function () {
        $scope.currentPage++;
        $scope.fetchBooks($scope.currentPage);
    };

    $scope.prevPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            $scope.fetchBooks($scope.currentPage);
        }
    };

    // Fetch the first page on initialization
    $scope.fetchBooks($scope.currentPage);
});