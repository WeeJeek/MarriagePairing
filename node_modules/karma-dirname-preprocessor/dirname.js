const path = require('path');

const createDirnamePreprocessor = logger => {
  const log = logger.create('preprocessor.dirname');

  return (content, file, done) => {
    log.debug('Processing "%s".', file.originalPath);
    done(content.replace(/__dirname/g, `'${path.dirname(file.originalPath)}'`));
  };
};

createDirnamePreprocessor.$inject = ['logger'];

module.exports = createDirnamePreprocessor;
