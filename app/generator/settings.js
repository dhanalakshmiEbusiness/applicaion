/**
 * Created by dhanalakshmi on 10/11/16.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config');
var settingsData = require('../models/settingsModel');
Schema = mongoose.Schema;
mongoose.connect(config.db);


function generateApplicationSettings(){
    settingsData.remove(function (err) {
        if(err)
          console.log(err)

    });
    var settingsObj = new settingsData();
    settingsObj.id=1
    settingsObj.cameraUrl="rtsp://riteshranjan:ranjan007@12.0.0.33:88/videoMain";
    settingsObj.dockerUrl="test";
    settingsObj.save(function(err,result){
        if(err)
            console.log(err)
        console.log("settings generated")
        process.exit(0);
    })
};
generateApplicationSettings();