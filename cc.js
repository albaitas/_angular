(function (){
    "use strict";

    angular
    .module("app", [])
    .controller("AppCtrl", AppCtrl)

    function AppCtrl($scope){
        $scope.title = "hello, AngularJS";

        $scope.clickBtn = function(){
            console.log("Click again");
        };
        $scope.hoverBtn = function(){
            console.log("Hover again");
        };
        $scope.nameData = [
            {
            "firstName":"John",
            "lastName":"Doe"
            },
            {"firstName":"Anna",
            "lastName":"Smith"
            },
            {"firstName":"Peter",
            "lastName":"Jones"
            }
            ]
         }
})();

