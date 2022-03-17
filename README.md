# Sql Injection Detector

Sql-injection-detector is a Machine Learning powerd tools for detect sql injection syntext in SQL query.


## Features

- ML Powerd model
- Detect 99.99% sql injection syntext
- Sqlmap tested verified

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the sql-injection-detector.

```sh
npm install -g sql-injection-detecor
```

## Using
Import
```sh
const learn = require('./index');
```

Then:

```sh
let o =  learn.detectSql("2' AND ORD(MID((SELECT DISTINCT(IFNULL(CAST(schema_name AS NCHAR),0x20)) FROM INFORMATION_SCHEMA.SCHEMATA LIMIT 5,1),5,1))>1 AND 'vFAF'='vFAF")
const d = o.then(function (res){
    if (!err){
        if(success){
            console.log("Sql injection not detected")
        }else {
            console.log("Sql injection detected")
        }
    }
    
})
```

## License

MIT

**Free Software, Hell Yeah!**

!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)

## BTC
**3Ed3EgdQsVFNG3pGo3gJUqmUJEJ5oN2Hd1**

