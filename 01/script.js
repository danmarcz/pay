
function FormController($scope, $http) {
  var card = $scope.card = {
    number: '1234567890123456',
  };

  $scope.card_number = /^\d{16,20}$/;
  $scope.card_exp = /^\d\d[01]\d$/;
  $scope.card_code = /^\d{3,4}$/;
 
  $scope.send = function() {
    $http({method: 'POST', url: '/someUrl', data: '' + $scope }).
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
    return $scope.myForm.$invalid || angular.equals(card, $scope.form);
  };
 
}
