const learn = require("./learn");

const _extend = function(obj1){
    var objs = Array.prototype.slice.call(arguments,1);
    objs.forEach(function(obj){
        for(var key in obj){
            obj1[key] = obj[key];
        }
    });
};

_extend(learn);

learn.allModules = function(){return {'SqlInjection': learn.detectSql}}

module.exports = learn;
