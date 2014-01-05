
function FormController($scope, $http) {
  $scope.rooms = [
    { id:'101', desc:'1 / 3+1, sociální zařízení, TV, lednice'},
    { id:'102', desc:'1 / 2+1, sociální zařízení, TV, lednice'},
    { id:'201', desc:'2 / 3+1, sociální zařízení, TV, lednice'},
    { id:'202', desc:'2 / 2+1, sociální zařízení, TV'}
   ];

  $scope.items = [{ 
    acc : { adults: 0, children: 0, extrabed: false, babybeds:0 }, 
    food: { adults: 0, children: 0},
    accPrice: 0, foodPrice: 0 
  }];
  $scope.totalPrice = 0;

  $scope.addRoom = function() {
    $scope.items.push({ 
      acc : { adults: 0, children: 0, extrabed: false, babybeds:0 }, 
      food: { adults: 0, children: 0},
      accPrice: 0, foodPrice: 0
    });
  };

  $scope.change = function(item) {
    item.accPrice = item.acc.adults * 100 + item.acc.children * 50;
    item.foodPrice = item.food.adults * 10 + item.food.children * 5;
    var total = 0;
    for (i in $scope.items) {
      total = total + $scope.items[i].accPrice + $scope.items[i].foodPrice;
    }
    $scope.totalPrice = total;
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
