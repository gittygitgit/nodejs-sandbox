var winston=require('winston');

// using the default logger (accessible through winston module directly
winston.error('error'); 
winston.info('info');
winston.debug('debug');// not printed since default logger has level INFO

// raise logging level
winston.level = 'debug'; 
winston.debug('debug');  // now this is printed



