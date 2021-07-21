import logger from './logger.js';

function firstRun(){
    logger.printCount();
    logger.log('Hello World');
    logger.printCount();
}

export {
    firstRun
};