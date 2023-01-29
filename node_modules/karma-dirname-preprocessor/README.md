# 简介

替换 `__dirname` 变量。

## 使用方式

```
npm install --save-dev karma-dirname-preprocessor
```

```
// karma config
module.exports = {
    // ...
    preprocessors: {
        "test/*.test.js": ['dirname'],
        // ...
    },
    // ...
};
```

## 协议

MIT
