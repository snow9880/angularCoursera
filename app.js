(function (){
"use strict";

angular.module('LunchCheck', [])

.controller('lunchCheckController', lunchCheckController);

lunchCheckController.$inject = ['$scope'];

function lunchCheckController($scope){


  $scope.totalItems = function(){
    if (!$scope.items){
      $scope.message = "Please enter data first";
      $scope.style ={'color':'red', 'border': '1px solid red'};
    } else {
      var number = $scope.items.split(', ').length;
      $scope.style = {'color': 'green', 'border': '1px solid green'};
      if (number <= 3 && number > 0){
        $scope.message= "Enjoy!";
      }
      else if (number > 3){
        $scope.message = "Too Much!";
      }
    }
  };
};

})();
