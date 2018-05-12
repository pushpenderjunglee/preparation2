const winston = require('winston');

winston.add(
    winston.transports.File,{
        filename:'Libraries\Documents\app.log',
        level:'error',
        json:true,
        timestamp:true
    }
)
module.exports=winston;