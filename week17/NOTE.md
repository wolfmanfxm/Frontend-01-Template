
# Week17-lesson 1	 组件 TabPanel & ListView

代码：（generator-champ 文件夹）

# Week17-lesson 2	 工具链 

代码：（toolchain 文件夹）

## 工具
- jenkins
- git
- webpack
- travis
- babel
- eslint
- gulp
- create-react-app
- umi
- gitlab
- vscode
- mocha
- http-server
- rollup
- vue-cli
- grunt
- mock
- husky
- prettier
- axios
- yeoman
- postman
- dva
- lerna
- jest
- maven
- easymock
- swagger
- wireshark
- charis
- charles

### 工具分类

### 在没有函数名字的函数里面实现递归 anonymous recursion

```
let y = g => 
    (f => f(f))(
      self =>
        g( (...args) => self(self).apply(this, args) )
    )

    
let f = y(self => {
  return n => n > 0 ? self(n - 1) + n : 0
})

f(100)
```
