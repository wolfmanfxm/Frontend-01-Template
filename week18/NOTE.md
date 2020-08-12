
# Week18-lesson 1-2	 工具链——开发工具

## Server

- ### build

  #### webpack

  #### babel

  1. 安装：

     ```
     npm install --save-dev @babel/core @babel/cli @babel/preset-env
     ```

  2. 创建 babelrc：

  3. 重定向：

     ```
     babel demo.js > newDemo.js
     ```

  #### @vue/compiler-sfc

- ### watch

  fsevents 

  Windows系统操作不了

- ### mock

- ### http

  #### httpserver

## Client

- ### debugger

  #### vscode

  #### devtool

- ### source map



## 工具链——测试工具

### Mocha

#### 1. 搭建项目

   ```
   npm init
   ```

#### 2. 安装 Mocha

   ```
   npm install --save-dev mocha
   ```

#### 3. 创建目录

   ```
   ├───test/
       ├───src/
       │   └───add.js
       └───test/
           └───add.test.js
   ```

#### 4. 添加测试用例

   ```
   var assert = require('assert');
   var add = require('../src/add.js');
   describe('add', function () {
       it('should return -1 when the value is not present', function () {
         assert.equal(add.add(3, 4), 7);
       });
   });
   ```

#### 5. 在package.json 修改 scripts 配置

```
"test": "mocha"
```

#### 6. 兼容 ES6 module 语法

- 安装最新版本 nodejs

- 在 package.json 文件中添加如下代码：

  ```
  "type": "module"
  ```

  

### nyc

#### 1. 安装 nyc

```
npm install nyc
```

#### 2. 在 package.json 中添加脚本

```
"coverage": "nyc mocha"
```

#### 4. 添加 .nycrc 文件

```
{
    "all": true,
    "include": [
        "dist/*.js"
    ]
}
```

#### 3. 安装 webpack

```
npm install --save-dev webpack
```

#### 4. 安装 babel

```
npm install --save-dev babel-loader @babel/core @babel/preset-env
```

#### 5. 添加 .babelrc 文件

```
{
    "presets": ["@babel/preset-env"]
}
```

#### 6. 添加 package.json scripts 配置

```
"coverage": "nyc mocha"
```



### ava

#### 1. 安装

```
npm install --save-dev ava
npm install --save-dev @babel/register
npm install --save-dev @ava/babel
```

#### 2. 修改 add.test.js 文件

```
let mod = require('../src/add.js');
let test = require('ava');

test('foo', t => {
    if (mod.add(3, 4), 7) {
        t.pass();
    }
});
```

#### 3. 在 package.json 文件中添加 ava 配置

```
"ava": {
    "files": [
      "test/*.js"
    ],
    "require": [
      "@babel/register"
    ],
    "babel": {
      "testOptions": {
        "babelrc": true
      }
    }
  }
```

#### 4. 修改 .nycrc 文件

```
{
    "all": true,
    "include": [
        "src/*.js"
    ]
}
```

#### 5. 修改 package.json 文件中的 scripts 配置

```
"test": "ava",
"coverage": "nyc ava"
```



### istanbuljs 插件

#### 1. 安装

```
npm install --save-dev @istanbuljs/nyc-config-babel
npm install --save-dev babel-plugin-istanbul
```

#### 2. 在 .nycrc 文件中新增如下选项

```
"extends": "@istanbuljs/nyc-config-babel"
```

#### 3. 在 .babelrc 文件中添加如下配置

```
"plugins": ["babel-plugin-istanbul"]
```

#### 4. 修改 add.test.js 文件

```
import { add } from '../src/add.js';
import assert from 'assert';

it('add(3, 4) should be 7', () => {
    assert.equal(add(3, 4), 7);
});
```



### 测试 html-parser