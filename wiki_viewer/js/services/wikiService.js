app.factory('wikiService', function($http) {
      var api = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    var cb = '&callback=JSON_CALLBACK';

    var wikiService = {
        get: function(title) {
          //console.log(title);
            return $http.jsonp(api + title.name.toLowerCase() + cb);
        }
    };

    return wikiService;
});
    
