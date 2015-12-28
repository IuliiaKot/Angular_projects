app.controller('MainController', ['$scope', function($scope) {
  $scope.all = [];
  console.log($scope.all);
  $scope.online = [];
  $scope.offline = [];

  var streamers = ["freecodecamp", "GeoffStorbeck", "terakilobyte", "habathcx","notmichaelmcdonald","RobotCaleb","medrybw","comster404","brunofin","thomasballinger","joe_at_underflow","noobs2ninjas","mdwasp","beohoff","xenocomagain"];

  var cb = '?&callback=?';
  var url = 'https://api.twitch.tv/kraken/';

  streamers.forEach(user => {

    var obj = {};
    $.getJSON(url + 'streams/' + user + cb).success(function(data){
      //console.log(data);
      var online = (data.stream === null) ? false : true;
      obj.status = online;
      console.log(obj.status)
      if (online) {
        var title = data.stream.channel.status;
        if (title.length > 36){
          title = title.substring(0,33);
          title += "...";
        }

        obj.title = title;
      }
      else
       {
        obj.title = '';
       }
      obj.username = user;

      $.getJSON(url + "users/" + user + cb).success(function(data){
        obj.name = data.display_name;
        obj.logo = data.logo;
        $scope.all.push(obj);
        if (online){
          $scope.online.push(obj);
        }else{
          $scope.offline.push(obj);
        }
        $scope.profile = $scope.all;
        $scope.$apply();
      })
    })
  })

    $('.menuBar li').on('click', function() {

    if ($(this).text() === 'All') {
      $scope.profile = $scope.all;
    } else if ($(this).text() === 'Online') {
      $scope.profile = $scope.online;
    } else {
      $scope.profile = $scope.offline;
    }
    $scope.$apply();

    $('.menuBar li').removeClass('activeMenu');
    $(this).addClass('activeMenu');

  })
}]);