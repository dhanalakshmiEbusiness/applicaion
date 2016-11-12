/**
 * Created by dhanalakshmi on 11/11/16.
 */

app.service('formService',['$http', function($http) {
    var companyConfig={};
    var formService = {
        getCompanyFromJsonConfig:function(){
            return $http.get('/companyJsonConfig');
        },

        setApplicationStreamSettings: function (streamConfigObj) {
            return $http.post('/settings',streamConfigObj);
        },

        setCompanyFromConfig:function(configObj){
            companyConfig=configObj;

        },
        getCompanyFromConfig:function(){
            return companyConfig;
        }
    }

    return formService;



}]);
