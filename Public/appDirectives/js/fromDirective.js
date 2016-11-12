/**
 * Created by dhanalakshmi on 11/11/16.
 */

app.directive('jsonFrom', function() {

    function link(scope, elem, attrs) {
        var modifiedJsonArray=[];
        if(scope.jsonConfig){
            modifiedJsonArray=createForm(scope.jsonConfig)
            if(modifiedJsonArray){
                scope.filedsArray =modifiedJsonArray;

                console.log("******************************in contorller")
                console.log(scope.filedsArray )
                console.log("******************************in contorller")
            }
        }

    }




    function createForm(jsonConfiguration) {
        var extractedData=[];
        var label=[]
        var k = Object.keys(jsonConfiguration);
        k.forEach(function (objkey, index) {
            label.push(k[index]);

            var obj = {
                "name": splitCamelCase(objkey),
                "realName": objkey,
                "type": jsonConfiguration[k[index]].type,
                "description": jsonConfiguration[k[index]].description,
                "model": jsonConfiguration[k[index]].label

            };

            extractedData.push(obj);

        });
        return extractedData;

    }




    function splitCamelCase (s) {
        return s.split(/(?=[A-Z])/).join(' ').split('_').join(' ').split('-').join(' ');
    };

    return {
        scope: {
            jsonConfig:'='
        },
        link: link,
        templateUrl: '../../appDirectives/templates/template.html'
    };

})