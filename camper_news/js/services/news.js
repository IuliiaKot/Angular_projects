app.factory('news', ['$http', function($http) {
  return $http.get('http://www.freecodecamp.com/news/hot')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
