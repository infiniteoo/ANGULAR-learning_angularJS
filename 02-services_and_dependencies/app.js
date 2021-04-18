var myApp = angular.module('myApp', [
    'ngMessages', 'ngResource',
]);

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    console.log($scope);
    console.log($log)
    console.log($resource)
    $log.log("hello.")
    $log.info("this is information")
    $log.warn('warning!@')
    $log.debug('some debug information')
    $log.error('this is an ERROR')
    $scope.name = "john";
    $scope.formattedname = $filter('uppercase')($scope.name);
    $log.info($scope.name);
    $log.info($scope.formattedname);

    





});

var searchPeople = function(firstName, lastName, height, age, occupation) {
    return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople));
