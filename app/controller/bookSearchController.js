app.controller('bookSearchController', ['$scope', 'bookservice', function($scope, bookservice) {
    $scope.searchQuery = '';
    $scope.BookData = null;
    $scope.error = null;

    $scope.searchBooks = function() {
        if ($scope.searchQuery) {
            bookservice.searchBooks($scope.searchQuery)
                .then(function(data) {
                    if (data && data.results && data.results.length > 0) {
                        $scope.BookData = data.results[0]; // Assuming we're showing only the first result
                        $scope.error = null;
                    } else {
                        $scope.BookData = null;
                        $scope.error = 'No Books found. Please try a different query.';
                    }
                })
                .catch(function() {
                    $scope.error = 'Error fetching Book. Please try again later.';
                    $scope.BookData = null;
                });
        } else {
            $scope.error = 'Please enter a search query.';
        }
    };
}]);
