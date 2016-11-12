/**
 * Created by zendynamix on 31-10-2015.
 */
app.factory('authInterceptor', function ($rootScope, $q, $window) {
 return {
 request: function (config) {
 config.headers = config.headers || {};
 if ($window.sessionStorage.token && config.url.indexOf($rootScope.apibaseUrl)<0) {
 config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
 }
 return config;
 },
 responseError: function (rejection) {
 if (rejection.status === 401) {
 // handle the case where the user is not authenticated
 }
 return $q.reject(rejection);
 }
 };
 });



app.config(function ($httpProvider) {
 $httpProvider.interceptors.push('authInterceptor');
 });