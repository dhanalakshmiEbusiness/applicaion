/**
 * Created by dhanalakshmi on 4/11/16.
 */

/*var app = angular.module("directiveModule", ['ngMessages']);*/
app.controller('fromController', [ '$scope','formService', function($scope,formService) {

$scope.jsonConfig=formService.getCompanyFromConfig();

    console.log("**************")
    console.log(formService.getCompanyFromConfig())

$scope.submitFrom=function (data) {

    console.log("**************************")
    console.log(data)


}



}])
