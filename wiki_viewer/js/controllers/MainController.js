app.controller('MainController', function($scope, wikiService) {
  $scope.wikiData = [];
  var page = 'http://en.wikipedia.org/?curid=';
  $('button').click(function(){
      var input = $('input').val();
      wikiService.get({name: input}).then(function(data) {
        var tmp_wikiData = Object.keys(data.data.query.pages)
        var results = tmp_wikiData.map(key => data.data.query.pages[key])
        angular.forEach(results, function(v,k)  {
        $scope.wikiData.push({title: v.title, body: v.extract, page: page + v.pageid})
      })
        console.log($scope.wikiData);
    });
  })

});
