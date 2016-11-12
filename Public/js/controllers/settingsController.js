/**
 * Created by dhanalakshmi on 10/11/16.
 */
app.controller('settingsController', function ($scope,settingService) {





    $scope.saveConfiguration=function(configObj){
        console.log(configObj)
        console.log("*************************************")


        settingService.setApplicationStreamSettings(configObj).then(function(res){
            settingService.getApplicationStreamSettings().then(function (resultDetails) {

                settingService. setStreamConfigObj(resultDetails.data)
                init()


            }, function error(errResponse) {
                console.log("cannot get settings config")
            })

        })

    }


    function init(){
        var streamConfigObj= settingService.getStreamConfigObj()
        $scope.configObj={
            cameraUrl:streamConfigObj.cameraUrl,
            dockerUrl:streamConfigObj.dockerUrl
        }
    }
    init()
})