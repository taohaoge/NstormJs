var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var BlogScheme = new Schema({
    title:String
    ,content:String
    ,pic:String
    ,ip:String
    ,status:{type:Boolean,default:false}
    ,creattime:{type:String,default:C.time()}
    ,updatetime:{type:String,default:C.time()}
    ,email:String
    ,author:String
    ,view:{type:Number,default:0}
    , meta      : {
            votes : {type:Number,default:0}
          , favs  : {type:Number,default:0}
        }
});

mongoose.model('Blog', BlogScheme);
var Blog = module.exports = mongoose.model('Blog');