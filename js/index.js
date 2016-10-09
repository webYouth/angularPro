/*
 *ahthor:webYouth
 *this is index.html
 */
var module1 = angular.module("myapp",[]);

module1.controller("mycontro",["$scope","$filter",function($scope,$filter){
    $scope.arr = [];
    $scope.userlist = [
        {"img":"num.jpg","username":"ruby","userimfor":"Ruby, a simple and fast object-oriented scripting language"},
        {"img":"num2.png","username":"javascript","userimfor":"javascript, a simple and fast object-oriented scripting language"},
        {"img":"num3.png","username":"php","userimfor":"php, a simple and fast object-oriented scripting language"},
        {"img":"num4.jpg","username":"python","userimfor":"python, a simple and fast object-oriented scripting language"},
        {"img":"num5.png","username":"c++","userimfor":"c++, a simple and fast object-oriented scripting language"},
        {"img":"num6.png","username":"java","userimfor":"java, a simple and fast object-oriented scripting language"},
        {"img":"num7.jpg","username":"c#","userimfor":"c#, a simple and fast object-oriented scripting language"},
        {"img":"num8.jpg","username":"swift","userimfor":"swift, a simple and fast object-oriented scripting language"}
    ];
    $scope.arr = $scope.userlist;
    $scope.name = '';
    $scope.search = function(){
        $scope.userlist = $filter("filter")($scope.arr,$scope.name);
    };
    // $scope.sort = function() {
        
    // }
}]);
















