/**
 * Created by dhanalakshmi on 10/11/16.
 */
app.service('settingService',['$http', function($http) {
    var streamConfigObj={};
    var settingService = {
        setApplicationStreamSettings: function (streamConfigObj) {
            return $http.post('/settings',streamConfigObj);
        },
        getApplicationStreamSettings:function(){
            return $http.get('/settings');
        },
        setStreamConfigObj:function(configObj){
            streamConfigObj=configObj;

        },
        getStreamConfigObj:function(){
            return streamConfigObj;
        }
    }

    return settingService;



}]);
