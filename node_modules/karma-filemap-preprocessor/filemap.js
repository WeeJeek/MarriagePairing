const path = require('path')
const compiler = require('miniprogram-compiler')

const compilerResCache = {}

const escapeContent = content => {
  return content.replace(/\\/g, '\\\\').replace(/'/g, '\\\'').replace(/\r?\n/g, '\\n\' +\n    \'');
};

const createFileMapPreprocessor = (logger, basePath, config) => {
  const log = logger.create('preprocessor.filemap')

  let compileString
  if (basePath) {
    if (compilerResCache[basePath]) {
      compileString = compilerResCache[basePath]
    } else {
      global.window = global.window || {}
      compileString = compiler.wxmlToJs(basePath, config)
      compilerResCache[basePath] = compileString
    }
  }

  return (content, file, done) => {
    log.debug('Processing "%s".', file.originalPath)

    if (basePath && path.extname(file.originalPath) === '.wxml') {
      const relativeWxmlPath = path.relative(basePath, file.originalPath).replace(/\\/ig, '/')

      done(`
        if (!window.$gwx) {
          var compileFunc = new Function('${escapeContent(compileString)}');
          window.$gwx = compileFunc();
        }
        window.__webview_engine_version__ = 0.02;
        window.__FILE_MAP__ = window.__FILE_MAP__ || {};
        window.__FILE_MAP__['${file.originalPath}'] = window.$gwx('${relativeWxmlPath}');
      `);
    } else {
      done(`
        window.__FILE_MAP__ = window.__FILE_MAP__ || {};
        window.__FILE_MAP__['${file.originalPath}'] = '${escapeContent(content)}';
      `);
    }
    
  }
}

createFileMapPreprocessor.$inject = ['logger', 'config.basePath', 'config.fileMapPreprocessor']

module.exports = createFileMapPreprocessor
