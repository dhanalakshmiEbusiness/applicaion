/**
 * Created by dhanalakshmi on 11/11/16.
 */

var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose')
    companyConfig=require('../../jsonconfig/company.json')
module.exports = function (app){
    app.use('/', router);
};


router.get('/companyJsonConfig', function (req, res) {
  res.send(companyConfig);
})

/*
router.get('/settings', function (req, res) {
    settingsModel.findOne({}, function (err, settingsObj) {
        if (err) {
            res.send(err)
        }
        else {
            res.send(settingsObj)
        }


    })
})


router.post('/settings', function(req, res, next) {
    console.log("***************************************")
    console.log(req.body)
    settingsModel.find({"id":1},function(err,result){
        console.log( req.body)
        result[0].id=1
        result[0].cameraUrl=req.body.cameraUrl
        result[0].dockerUrl=req.body.dockerUrl
        result[0].save(function(err) {
            if (err){
                console.log('Error in Saving configObj: '+err);
            }

            res.send("configObj added sucessfully");
        });
    })



})
*/
