
function FormController($scope, $http) {
  $scope.rooms = [
    '101','102','201','202'
   ];

  $scope.items = [ { room: '101', adults: 2, children: 1 } ];

  $scope.addRoom = function() {
    $scope.items.push({ adults: 0, children: 0 });
  };

  $scope.send = function() {
    $http({method: 'GET', url: '/process?n=' + $scope.room.id }).
      success(function(data, status, headers, config) {
        alert('http get suceeded');
        // this callback will be called asynchronously
        // when the response is available
      }).
      error(function(data, status, headers, config) {
        alert('http get failure: status=' + status + ', data=' + data);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  };

  $scope.isSendDisabled = function() {
    return $scope.myForm.$invalid || angular.equals(room, $scope.form);
  };
 
}
