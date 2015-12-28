app.controller('MainController', ['$scope', 'news', function($scope, news) {
  news.success(function(data) {
    $scope.userNews = data;
  });
}]);
