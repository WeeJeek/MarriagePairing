# 简介

将文件内容挂载到 `window.__FILE_MAP__` 之下。

> PS：如果文件中包含 `.wxml` 后缀的模板文件，则会被编译成小程序可用的模板函数。编译根路径为 karma 配置中的 basePath 字段。

## 使用方式

```
npm install --save-dev karma-filemap-preprocessor
```

```
// karma config
module.exports = {
    // ...
    files: [
      'src/**/*',
      // ...
    ],
    preprocessors: {
        "src/**/*": ['filemap'],
        // ...
    },
    // ...
};
```

## 协议

MIT
