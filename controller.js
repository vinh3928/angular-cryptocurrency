app.controller("CurrencyController", function($scope, $firebaseObject) {
  var coinRef = new Firebase("https://publicdata-cryptocurrency.firebaseio.com/");
  $scope.coinData = $firebaseObject(coinRef);
  console.log($scope.coinData);
});
