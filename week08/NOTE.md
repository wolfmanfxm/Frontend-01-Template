# Week8-lesson 1	重学CSS 选择器

## 选择器语法

### 简单选择器

- *
- div svg|a                                    ( |  :  namespace )
- .cls
- #id
- [attr=value]                                ( [attr|=value] , [attr~=value] )
- :hover
- ::before

### 复合选择器

- <简单选择器><简单选择器><简单选择器>
- \* 或者 div 必须写在最前面

### 复杂选择器

- <复合选择器><sp><复合选择器>
- <复合选择器>">"<复合选择器>
- <复合选择器>"~"<复合选择器>
- <复合选择器>"+"<复合选择器>
- <复合选择器>"||"<复合选择器>

### 选择器列表

,  逗号分隔

## 选择器优先级

### 简单选择器计数

实例： #id div.a #id2 {} 			[0, 2, 1, 1]

​		S = 0\*N³ + 2\*N² + 1\*N + 1\*1				N = 一个足够大的数

练习：写出下面选择器的优先级

- div#a.b .c[id=x]                  [0,1,3,1]
- #a:not(#b)                          [0,2,0,0]           ( :not() 不参与优先级计算 )
- *.a                                      [0,0,1,0]           ( * 没有优先级 )
- div.a                                   [0,0,1,1]

✿✿✿ 注意：**只有简单选择器才有 specificity 优先级** ，与顺序无关。

## 伪类

### 链接 / 行为

- :any-llink
- :link :visited             （ link 是没访问的，visited 是访问过的 ）
- :hover                      （ 鼠标覆盖 ）
- :active                     （ 鼠标和键盘都能触发 ）
- :focus                      （ Tab 就是用来切 focus 焦点元素的，当 focus 在某个元素时，键盘事件都是在此元素上生效，比如：Enter ）
- :target                     （ ）

### 树结构

- :empty
- :nth-child()
- :nth-last-child()
- :first-child :last-child :only-child

需要回溯的不推荐使用，即：:nth-last-child() 、 :last-child 、:only-child 

### 逻辑型

- :not 伪类
- :where :has

## 伪元素

- ::before
- ::after
- ::first-letter ::first-line 

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

02：00：00    block-boxes ，block-level-box ，block-container

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

