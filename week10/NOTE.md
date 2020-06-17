# Week10-lesson 1	重学前端

## 重学 DOM2

### Range API

作用 ：用来精细操作 DOM 树的节点及内容，也可以用来做批量操作

#### 操作

- var range = new Range()
- range.setStart(element, index)                设置 range 的起始位置，从 index 那一位开始
- range.setEnd(element, index)                 设置 range 的终止位置，不包含第 index 那一位 （ 同 substring ）
- var range = document.getSelection().getRangeAt(0)               返回一个包含当前选区内容的区域对象 （即前面三个的综合）
- 其他辅助 API

  + range.setStartBefore
  + range.setEndBefore
  + range.setStartAfter
  + range.setEndAfter
  + range.selectNode
  + range.selectNodeContents

#### 使用

- var fragment = range.extractContents()                                             摘出 range 选中区域的内容，得到一个 fragment 片段

- range.insertNode(document.createTextNode("Hello World"))            向 range 选中的区域内插入节点

  注 ：可以往选中节点内部的文字片段中插入节点，append 等只能在某个节点之后或之前插入

#### 实例

```
<div id="a">01234<span>56789</span>abcdef</div>
//	div 内有三个节点：第一个是text文本节点 01234 ，第二个是span元素，第三个是text节点 abcdef ；
//	span 内是一个文本节点 56789 ；
<script>
	let ele = document.getElementById("a");
	let range = new Range();
	range.setStart(ele.childNodes[1].childNodes[0], 2);
	range.setEnd(ele.childNodes[2], 3);
	range.extractContents();				//	=>  #document-fragment  <span>789</span>"abc"
</script>

//	原页面元素变为 <div id="a">01234<span>56</span>def</div>
//	要想将整个 span 截掉，就将其前一个节点的最后一位后面设置为起始位置，即：range.setStart(ele.childNodes[0], 5);
```

### 其他 API

作业

## 重学 CSSOM

### document.styleSheets

**✿✿✿**注意 ：只能得到 <style> 标签 和 <link rel="stylesheet"> 两种 styleSheet ，并且得到的 styleSheet 中的 cssRules 也只会有在该标签内定义的属性内容，元素的**行内样式定义在 cssRules 中查看不到**。

案例 ：[styleSheet.html](F:\testSpace\geek\Frontend-01-Template\week10\styleSheet.html)            （通过 Console 查看）

#### 操作

- document.styleSheets[0].cssRules                                                      得到 CSS 规则，是一个数组

- document.styleSheets[0].insertRule("p { color: pink; }", index)            往 index 的位置插入CSS规则 p { color: pink; }

  （插入的规则只能以字符串的形式传入，并且一定要页面有 <style> 标签才能插入）

- document.styleSheets[0].removeRule(index)                                       删除第 index 条规则

#### Rules

##### Rule - 普通规则

- CSSStyleRule
  + selectorText        ( String )
  + style                    ( { key: value } )

![cssRule](F:\test\自学-极客大学\前端训练营\images\W10L1-1-cssRule.png) 

可通过 API 更改 Rules ，会实时生效；如 ：

```
document.styleSheets[0].cssRules[0].selectorText = "span";				//	<a> 的 background-color 属性会转移到 <span> 上
document.styleSheets[0].cssRules[1].style.color = "yellow";				//	<span> 的 color 属性会更改为 yellow
```

##### At-rule - @规则

- CSSCharsetRule
- CSSImportRule
- CSSMediaRule
- CSSFontFaceRule
- CSSPageRule
- CSSNamespaceRule
- CSSKeyframesRule
- CSSSupportsRule
- ......

### getComutedStyle

getComputedStyle(element, pseudoElement);                                                得到某元素计算出来的样式 （ 更能反映元素真实的样式，会包含行内样式 ）

- element ：想要获取的元素
- pseudoElement ：可选，伪元素

### View API

- window.open(url, windowName, [windowFeatures]);                                开一个新窗口

- window.close();                                                                                         关闭当前窗口

- window.scroll(x, y);                                                                                    窗口滚动 （ x, y 是绝对位置的值 ）

- window.scrollBy(x, y);                                                                                窗口滚动 （ x, y 是相对当前位置的差值 ）

- window.innerWidth;                                                                                   视口的宽度

- window.innerHeight;                                                                                  视口的高度

- window.devicePixelRatio;                                                                          DPR ，物理像素（分辨率）与 逻辑像素（屏幕宽度）的比值

- ele.scrollHeight;                                                                                         元素滚动窗口中的完整内容所占的高度

- ele.getClientRects();                                                                                  获得元素在视口的位置和所占的空间 

  （ inline 元素会由于排版产生多个行盒的原因，会得到多个 Rect ）

- ele.getBoundingClientRect();                                                                    获得包裹此元素的盒 的位置和所占的空间

  （?? 不会受到外面包裹容器的 scroll 影响，会根据实际渲染所占的区域，不会超出可见区域）

- document.documentElement.getBoundingClientRect();                           视口的位置和所占的空间大小

## data uri

### 结构

由 **data: type,content** 的形式组成；

- data ：data 协议，浏览器协议的一种，其他的协议还有： http 协议（打开服务器文件） 、file 协议（打开本地文件）
- type ：规定服务端返回的头的类型（Response Headers 中的 Content-Type 属性值）
- content ：需要生成的内容

### 实例

- ```
  data:text/html,<a>123</a>
  ```

  ![](F:\test\自学-极客大学\前端训练营\images\W10L1-2-dataUri1.gif)

- ```
  data:image/svg+xml,<svg width="100%" height="100%" version="1.1" 
  xmlns="http://www.w3.org/2000/svg"><ellipse cx="300" cy="150" rx="200" ry="80" style="fill: rgb(200,100,50); stroke: rgb(0,0,100); stroke-width:2" /> </svg>
  ```

  ![](F:\test\自学-极客大学\前端训练营\images\W10L1-2-dataUri2.gif)

# Week10-lesson 2	编程与算法训练 | TicTacToe /井字棋



代码：[XO-1.html](F:\testSpace\geek\Frontend-01-Template\XO-1.html) 

 