/**
 * Created by dhanalakshmi on 10/11/16.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var  settingsSchema = new mongoose.Schema(
    {
        id:Number,
            cameraUrl:String,
        dockerUrl:String
    },{collection: "settings"});

module.exports =mongoose.model('settings',settingsSchema);
