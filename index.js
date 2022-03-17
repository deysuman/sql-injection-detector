// author Suman @deysuman ["email.sumandey@gmail.com"]
let {PythonShell} = require('python-shell')

var sqlDetector = {
    detectSql: async function(keywords){
        return { success, err = '', val } = await new Promise((resolve, reject) => {
            PythonShell.run(__dirname + '/lib/exec.py', {args: [keywords]}, function(
            err,
            results
            ) {
            if (err) {
                reject({ success: false, err });
            }else{
            resolve({ success: parseInt(results[0])==0?true:false, val: parseInt(results[0]) });
            }
            });    
        }); 
    }
}

module.exports = sqlDetector