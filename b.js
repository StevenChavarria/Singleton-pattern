import logger from './logger.js';

function secondRun(){
    logger.printCount();
    logger.log('Lorem ipsum');
    logger.printCount();
}

export {
    secondRun
};