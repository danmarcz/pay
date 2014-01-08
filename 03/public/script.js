
function FormController($scope, $http) {

  $scope.rooms = [
    { id:'101', desc:'1 / 3+1, soc. zařízení, TV, lednice', adultPrices: [420, 660, 900], extrabedPrice:225, childrenPrice: 200 },
    { id:'102', desc:'1 / 3+1, soc. zařízení, TV, lednice', adultPrices: [420, 660, 900], extrabedPrice:225, childrenPrice: 200 },
    { id:'103', desc:'1 / 3+1, soc. zařízení, TV, lednice', adultPrices: [420, 660, 900], extrabedPrice:225, childrenPrice: 200 },
    { id:'104', desc:'1 / 3+1, soc. zařízení, TV, lednice', adultPrices: [420, 660, 900], extrabedPrice:225, childrenPrice: 200 },
    { id:'105', desc:'1 / 3+1, soc. zařízení, TV, lednice', adultPrices: [420, 660, 900], extrabedPrice:225, childrenPrice: 200 },
    { id:'106', desc:'1 / 3+1, soc. zařízení, TV, lednice', adultPrices: [420, 660, 900], extrabedPrice:225, childrenPrice: 200 },
   ];

  $scope.foodTypes = [
    { code:'N', name:'Bez stravy', adultPrice: 0, childPrice: 0 },
    { code:'S', name:'Snídaně', adultPrice: 60, childPrice: 40 },
    { code:'P', name:'Polopenze', adultPrice: 170, childPrice: 110 },
    { code:'PP', name:'Plná penze', adultPrice: 270, childPrice: 180 }
   ];

  $scope.babybedPrice = 80;

  $scope.items = [{ 
    acc : { adults: 0, children: 0, extrabed: false, babybeds:0 }, 
    food: { adults: 0, children: 0},
    accPrice: 0, foodPrice: 0,
    room: $scope.rooms[0] 
  }];

  $scope.totalPrice = 0;
  $scope.days = 1;
  $scope.foodType = $scope.foodTypes[2];

  $scope.addRoom = function() {
    $scope.items.push({ 
      acc : { adults: 0, children: 0, extrabed: false, babybeds:0 }, 
      food: { adults: 0, children: 0},
      accPrice: 0, foodPrice: 0,
      room: $scope.rooms[0]
    });
  };

  $scope.changeAll = function() {
    $scope.items.forEach(function traverse(element, index, array) {
      $scope.change(element);
    });
  }

  $scope.change = function(item) {
    item.accPrice = 0;
    if (item.acc.adults > 0 ) {
      item.accPrice += item.acc.adults * item.room.adultPrices[item.acc.adults -1];
    }
    if (item.acc.children > 0) {
      item.accPrice += item.acc.children * item.room.childrenPrice;
    }
    if (item.acc.extrabed == true) {
      item.accPrice += item.room.extrabedPrice;
    }
    if (item.acc.babybeds > 0) {
      item.accPrice += item.acc.babybeds * $scope.babybedPrice;
    }

    item.accPrice = item.accPrice * $scope.days;
    // if ($scope.days == 1) {
    //   item.accPrice = item.accPrice * 1.1;
    // }
    // if ($scope.days > 2) {
    //   item.accPrice = item.accPrice * 0.9;
    // }

    item.foodPrice = item.food.adults * $scope.foodType.adultPrice 
    + item.food.children * $scope.foodType.childPrice;

    item.foodPrice = item.foodPrice * $scope.days;

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
