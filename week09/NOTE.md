# Week8-lesson 2	重学CSS 排版

## 盒 （Box）

![](F:\test\自学-极客大学\前端训练营\images\W8L2-1-盒.png)

## 盒模型

![](F:\test\自学-极客大学\前端训练营\images\W8L2-2-盒模型.png)

通常的 width 属性默认是 content-box 的 width ，如果想将 border-box 作为宽度值，可通过 box-sizing 属性来设置更改；

## 正常流 - normalFlow

- 从左到右
- 同一行的文字都是对齐的
- 一行满了，就换到下一行，从上到下

### 正常流排版

- 收集盒进 行（ háng ）
- 计算盒在行中的排布
- 计算行的排布

### IFC & BFC

IFC : Inline formatting contexts				      (CSS2.1 ，9.4.2)
BFC : Block formatting contexts					 [(CSS2.1 ，9.4.1)](https://www.w3.org/TR/CSS21/visuren.html#block-formatting) 

![](F:\test\自学-极客大学\前端训练营\images\W8L2-3-BFC & IFC.png)    

block-level			表示可以被放入 BFC
block-container	 表示可以容纳 BFC
block-box = block-level + block-container			( Block-level boxes that are also block containers are called block boxes. )
block-box 如果 overflow 是 visible， 那么就跟父 BFC合并

### 正常流的行模型 - IFC

baseline 基线：inline-box 的 vertical-align: baseline ，盒内有文字的时候，是以文字的对齐基准线（英文书写本从上往下数的第三根线）为基线；没有文字的时候，是以 box 的下边缘当做基线。所以在设置 div 等元素属性为 display: inline-block;  将其变为 inline-box 的时候，一般最好给一个 vertical-align: top; 属性（或 bottom 、middle ）

重点：视频讲解

### float 与 clear

float 可用来实现文字环绕排版，需要换行就 clear ；其他 inline 元素排版建议使用 flex ；

float 会脱离正常流（脱离文档流），即不在任何一个行盒里；

重点：视频讲解

### margin 折叠

margin 折叠只会发生在 BFC 里，所以只会发生在交叉轴方向

margin 可翻译为留白 ，只要盒子周围留有足够的空白就可以，可以重复使用，不会与其他盒子的 margin 累加；

两个 BFC 的 margin 不会折叠，只有属于同一个 BFC 的 margin 会发生折叠，同一个 BFC 与包裹它的盒子 margin 也会折叠；

只要是一个容器，能容纳正常流，它就是一个独立的 BFC ；除了正常流里的容器使用  overflow: visible; 属性，就不会产生新的 BFC ，会与外部的 BFC 发生 margin 折叠 ；

（ 视频   02：00：00    block-boxes ，block-level-box ，block-container ）

## Flex

### Flex 排版

- 收集盒进行
- 计算盒在主轴方向的排布
- 计算盒在交叉轴方向的排布

#### 分行

- 根据主轴尺寸，把元素分进行
- 若设置了 no-wrap ，则强行分配进第一行

#### 计算主轴方向

- 找出所有 flex 元素
- 把主轴方向的剩余尺寸按比例分配给这些元素
- 若剩余空间为负数，所有 flex 元素为0，等比例压缩剩余元素

#### 计算交叉轴方向

- 根据每一行中最大元素尺寸计算行高
- 根据行高 felx-align 和 item-align ，确定元素具体位置



## Tips - 参考资料及名词解释

- first-letter ：是 HTML 文档中 content 内容的第一个字，是固定的；
- first-line ：是 CSS 排版后的第一行，会因为屏幕宽度不同及其他属性影响，实际渲染出来的内容是不一样的，不是固定的；
- flex-item 和 flex-container ：https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-items
- 大家请记住下面这个表现原则：如果一个元素具有 BFC，内部子元素再怎么翻江倒海、翻云覆雨，都不会影响外部的元素。所以，BFC 元素是不可能发生 margin 重叠的，因为 margin 重叠是会影响外部的元素的；BFC 元素也可以用来清除浮动的影响，因为如果不清除，子元素浮动则父元素高度塌陷，必然会影响后面元素布局和定位，这显然有违 BFC 元素的子元素不会影响外部元素的设定。



# Week9-lesson 1	重学CSS 动画与渲染

## Animation

### 使用

- @keyframes 定义
- animation ：使用

```
@keyframes mykf {
	from {background: red;}
	to {background: yellow;}
}

div {
	animation: mykf 5s infinite;
}
```

### 属性  （由6个详细属性组成，类似 font ）

- animation-name  时间曲线 	（即 @keyframes 定义的关键帧）

  ```
  @keyframes mykf {
  	0% { top: 0; transition: top ease;}
  	50% { top: 30px; transition: top ease-in;}
  	75% { top: 10px; transition: top ease-out;}
  	100% { top: 0; transition: top linear;}
  }
  //	只有 0% 和 100% 时，可以用 from 和 to ；
  ```

- animation-duration  动画的时长

- animation-timing-function  动画的时间曲线

- animation-delay  动画开始前的延迟

- animation-iteration-count  动画的播放次数

- animation-direction  动画的方向

## Transition

### 属性

- transition-property  要变换的属性
- transition-duration  变换的时长
- transition-timing-function  时间曲线
- transition-delay  延迟

## cubic bezier - 三次贝塞尔曲线

动画的 timing-function 都是 三次贝塞尔曲线，即由一个起始点、一个终点、两个控制点决定形状的曲线；

![](F:\test\自学-极客大学\前端训练营\images\W9L1-1-三次贝塞尔曲线.png)

参考链接：https://cubic-bezier.com/#.17,.67,.83,.67

[曲线轨迹计算图解](F:\test\自学-极客大学\前端训练营\资料\cubic-bezier曲线\transition.html)  		（笔记中：transition.html）

### 贝塞尔曲线图

- 线性（一次）贝塞尔曲线

  ![](F:\test\自学-极客大学\前端训练营\images\W9L1-1-贝塞尔曲线\Bézier_1.gif)        演示动画，*t*在[0,1]区间

- 二次贝塞尔曲线

  ![](F:\test\自学-极客大学\前端训练营\images\W9L1-1-贝塞尔曲线\Bézier_2.png)                            二次贝塞尔曲线的结构  

  使用中介点Q0和Q1作为由0至1的t：由P0至P1的连续点Q0，描述一条线性贝塞尔曲线；由P1至P2的连续点Q1，描述一条线性贝塞尔曲线；由Q0至Q1的连续点B（t），描述一条二次贝塞尔曲线。

  

  ![](F:\test\自学-极客大学\前端训练营\images\W9L1-1-贝塞尔曲线\Bézier_2.gif)        演示动画，*t*在[0,1]区间

- 三次贝塞尔曲线

  ![](F:\test\自学-极客大学\前端训练营\images\W9L1-1-贝塞尔曲线\Bézier_3.png)      三次贝塞尔曲线的结构  

  由线性贝塞尔曲线描述的中介点Q0、Q1、Q2，和由二次曲线描述的点R0、R1所建构

  

  ![](F:\test\自学-极客大学\前端训练营\images\W9L1-1-贝塞尔曲线\Bézier_3.gif)        演示动画，*t*在[0,1]区间


## 渲染

- 颜色
- 形状

## 颜色

CMYK ：颜料三原色 ；（青，品红，黄，黑）

RGB ：光的三元素 ；（红、绿、蓝）

![](F:\test\自学-极客大学\前端训练营\images\W9L1-2-颜色1.png)

HSL ：颜色，纯度，亮度 ；

HSV ：颜色，纯度，色值 ； 		（目前使用）

![](F:\test\自学-极客大学\前端训练营\images\W9L1-2-颜色2.png)

## 形状

- border

- box-shadow

- border-radius

- data uri + svg           （做矢量图 推荐使用此方式）

  ```
  实例：		//	此方法能直接当做 url 打开，还能避免生成文件的烦恼 
  
  data:image/svg+xml,<svg width="100%" height="100%" version="1.1" 
  xmlns="http://www.w3.org/2000/svg"><ellipse cx="300" cy="150" rx="200" ry="80" style="fill: rgb(200,100,50); stroke: rgb(0,0,100); stroke-width:2" /> </svg>
  ```

  

# Week9-lesson 2	重学HTML

## HTML 的定义 ：XML 与 SGML

### SGML  -   以 DTD 的方式定义 

（ 出现在 DTD 里面 ）

  http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd

- DTD：Document Type Definition - 文档类型定义 ；以 Entity 实体的方式定义。

- Entity：实体（在 HTML 语境下就是 & 符后边的东西）
  HTML Entity 是一段以 “＆” 符号开头，以 “;” 符号结尾，能够表示 Unicode 符号的字符串文本。

  ```
  比较重要 需要记住的 entity ：
  nbsp		"&#160;"			no-break space ,  	( Unicode 编码： U+00A0 )  空格-不会打断，可把两个词连接为一个词
  quot		"&#34;"				quotation mark ,  	( Unicode 编码： U+0022 )  引号
  amp			"&#38;#38;"			ampersand ,  	  	( Unicode 编码： U+0026 )	&
  lt			"&#38;#60;"			less-than sign ,  	( Unicode 编码： U+003C )	小于号
  gt			"&#62;"			    greater-than sign , ( Unicode 编码： U+003E )	大于号
  ```

### XML  -  以 namespace 的方式定义

（ 出现在 HTML 标签的属性里面 ）

  http://www.w3.org/1999/xhtml

## HTML 标签 - 语义

重点：视频讲解

## HTML 语法

### 合法元素

- Element ：<tagname>...</tagname>
- Text ：text
- Comment ：<!-- comment -->
- DocumentType ：<!Doctype html>
- ProcessingInstruction ：<?a 1?>
- CDATA ：<![CDATA[]]>

### 字符引用

- `&#161;`
- `&amp;`
- `&lt;`
- `&quot;`

## 重学 DOM 

### Node

![](F:\test\自学-极客大学\前端训练营\images\W9L2-1-DOM-Node.png)

DOM 树里是没有 [DocumentFragment](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment) 节点存在的，DocumentFragment 不是真实 DOM 树的一部分，它的变化不会触发 DOM 树的重新渲染，且不会导致性能等问题。它可以被用来 append 到别的元素身上，此时是把片段的所有子节点一次插入到文档中。

### 导航类操作

- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibiling

### 修改类操作

- appendChild
- insertBefore
- removeChild
- replaceChild

### 高级操作

- compareDocumentPosition ：用于比较两个节点中关系；
- contains ：检查一个节点是否包含另一个节点；
- isEqualNode ：检查两个节点是否完全相同；
- isSameNode ：检查两个节点是否是同一个节点，实际可以在 JavaScript 中用 "===" 解决；
- cloneNode ：复制一个节点，如果传入参数 true ，则会连同子元素做深拷贝；

### 注意：默认规则

- 所有的 DOM 元素都默认只有一个父元素，不能两次被插入到 DOM 树，如果插入两次，会把第一次插入那个位置的该元素 remove 掉，只有第二次插入的位置才会保留这个 DOM 元素。
- childNodes 是一个 living collection ，所有修改操作都会实时改变它的值，就算先取个变量保存它也没用。



