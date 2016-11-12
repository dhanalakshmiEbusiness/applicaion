/**
 * Created by MohammedSaleem on 11/11/15.
 */

var dependencies = ['ui.router'];

var app = angular.module("app", dependencies);

app.run(function(formService){

    formService.getCompanyFromJsonConfig().then(function (resultDetails) {

        formService. setCompanyFromConfig(resultDetails.data)
        console.log("**************")
        console.log(formService.getCompanyFromConfig())

    }, function error(errResponse) {
        console.log("cannot get settings config")
    })


})


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('admin', {
        url: "/admin",
        templateUrl: 'credentials/admin.html',
        controller: 'fromController'
    })
        .state('admin.signIn', {
            url: "/signIn",
            templateUrl: 'credentials/signIn.html'
        })
        .state('admin.signUp', {
            url: "/signUp",
            templateUrl: 'credentials/signUp.html'
        })


    $urlRouterProvider.otherwise("/admin/signIn");
});


