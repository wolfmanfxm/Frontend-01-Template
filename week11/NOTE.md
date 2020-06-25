# Week11-lesson 1	编程与算法训练 | 异步编程

代码：[light.html](F:\testSpace\geek\Frontend-01-Template\week11\light.html) 

( Promise , async , generator )

# Week11-lesson 2	编程与算法训练 | 搜索算法

## 搜索算法（寻路问题）

代码：[findPath.html](F:\testSpace\geek\Frontend-01-Template\week11\findPath.html) 

## 正则表达式

### 相关 API

#### match

**`match()`** 方法检索返回一个字符串匹配正则表达式的的结果。

**语法** ：`str.match(regexp)` 

**返回值** ：

- 如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
- 如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组（`Array`）。 在这种情况下，返回的项目将具有**如下所述的其他属性**。

**附加属性** ：

匹配的结果包含如下所述的附加特性。

- `groups`: 一个捕获组数组 或 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)（如果没有定义命名捕获组）。
- `index`: 匹配的结果的开始位置
- `input`: 搜索的字符串.

一个[`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array)，其内容取决于global（`g`）标志的存在与否，如果未找到匹配则为[`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)。

**参考链接** ：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match





#### replace



#### exec





