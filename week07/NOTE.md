#  Week7-lesson 1	浏览器工作原理4

## layout

## render



#  Week7-lesson 2	重学CSS

## 第一步：CSS语法的研究

###  CSS2.1 语法： https://www.w3.org/TR/CSS21/grammar.html#q25.0

CSS总体结构 

- @charset
- @import
- rules
  + @media
  + @page
  + rule

###  CSS3 语法：https://www.w3.org/TR/css-syntax-3


 [CSS 结构 脑图](F:\test\自学-极客大学\前端训练营\CSS.xmind) （笔记中：CSS.xmind）

## 第二步：CSS @规则的研究

### At-rules

- @charset ：https://www.w3.org/TR/css-syntax-3/
- @import ：https://www.w3.org/TR/css-cascade-4
- @media ：https://www.w3.org/TR/css3-conditional/
- @page ：https://www.w3.org/TR/css-page-3/
- @keyframes ：https://www.w3.org/TR/css-animations-1/
- @font-face ：https://www.w3.org/TR/css-fonts-3/
- @supports ：https://www.w3.org/TR/css3-conditional/
- @namespace ：https://www.w3.org/TR/css-namespaces-3/
- @counter-style ：https://www.w3.org/TR/css-counter-styles-3/

**重点**：@charset 、@import 、@media 、@page 、@font-face 、@keyframes 、@supports

## 第三步：CSS 规则的结构

### Selector

- selectors-3 	https://www.w3.org/TR/selectors-3			(常用)
- selectors-4 	https://www.w3.org/TR/selectors-4			(较全)

### Declaration

#### Key

- Properties      （重点）
- Variables 	   https://www.w3.org/TR/css-variables/

#### Value

-  https://www.w3.org/TR/css-values-4/

## 第四步：初建 CSS 知识体系

### 收集 CSS 标准

```
//  收集 w3.org 的 css 标准 ，进入以下网页，捕捉元素 得到 每个标准的名称和链接 结构
var url = 'https://www.w3.org/TR/?tag=css'

var lis = document.getElementById("container").children;

var result = [];

for(let li of lis){
    if(li.getAttribute('data-tag').match(/css/))
        result.push({
            name: li.children[1].innerText,
            url: li.children[1].children[0].href
        })
}

console.log(JSON.stringify(result, null, "    "));
//	使用 el.dataset 可以看到它的 data-tag 、data-title 等属性及值
```





## Tips - 参考资料及名词解释

- COD：<!--                                       （注释的那个东西）
- CDC：-->                                        （注释的那个东西）
- 手机淘宝的flexible设计与实现：http://www.html-js.com/article/2402