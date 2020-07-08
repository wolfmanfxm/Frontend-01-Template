# Week13-lesson 1	编程与算法训练 | Proxy 与双向绑定









# Week13-lesson 2	组件化基础

## 对象与组件

### 对象

- Properties
- Methods
- Inherit

### 组件

- Properties
- Methods
- Inherit
- Attribute
- Config & State
- Event
- Lifecycle
- Children

## Component

![](F:\test\自学-极客大学\前端训练营\images\W13L2-1-component.png) 

### Properties & Attribute

- Attribute ：强调描述性 （外部的感觉）；
- Properties ：强调从属关系 （ property 的所有权属于哪个）；

示例详解 ：

1. Attribute 在 HTML 和 JS 中都可以设置 ；Properties 只能在 JS 中设置 ；

   ```
   Attribute :
   <my-component attribute="v" />
   myComponent.getAttribute("a");
   myComponent.setAttribute("a", "value");
   
   Property :
   myComponent.a = value;
   ```

2. 大多数时候 Attribute 和 Property 的概念在 HTML 和 JS 中是重叠的，但存在某些特例，比如使用的名字不同、类型不同、得到的值不同、意义不同；

   ```
   class : 名字不同
   <div class="cls1"></div>							 		   //	class
   <script>
   var div = document.getElementsByTagName("div")[0];
   div.className	//	cls1									  //	className
   </script>
   ```

   ```
   style : 类型不同
   <div class="cls1" style="color:blue;"></div>		  			//	以;分隔的 key:value 对组成的字符串
   <script>
   var div = document.getElementsByTagName("div")[0];
   div.style		//	CSSStyleDeclaration {0: "color", …}	 		//	style 是一个对象
   </script>
   ```

   ```
   href : 值不同
   <a href="//m.taobao.com"></a>
   <script>
   var a = document.getElementsByTagName("a")[0];
   a.href					   //	"http://m.taobao.com"					//	此处的 URL 是 resolve 过的结果
   a.getAttribute("href")		//	 "//m.taobao.com"						 //	 这里跟 HTML 代码中的值完全一致
   </script>
   ```

   ```
   ✿ value : 意义不同
   <input value="cute" />
   <script>
   var input = document.getElementsByTagName("input")[0];
   //	若 Property 没有设置，则结果是 Attribute ；Attribute 相当于 Property 的默认值，修改 attribute 的值 property 会随着改变
   input.value						//	cute
   input.getAttribute("value")		 //	  cute
   //	若设置了 value 的 property，则 Property 发生改变，Attribute 不变，元素上实际的显示效果是 property 优先
   //	在页面的 input 输入框中修改，相当于设置了 property
   input.value = "hello";			//	 设置 input 的 property
   input.value					   //	hello
   input.getAttribute("value")		//	 cute
   </script>
   ```

 ### 如何设计组件状态

|           | Markup set | JS set | JS Change | User Input Change |
| --------- | :--------: | :----: | :-------: | :---------------: |
| property  |     ✖      |   ✔    |     ✔     |         ❓         |
| attribute |     ✔      |   ✔    |     ✔     |         ❓         |
| state     |     ✖      |   ✖    |     ✖     |         ✔         |
| config    |     ✖      |   ✔    |     ✖     |         ✖         |

### Lifecycle

![](F:\test\自学-极客大学\前端训练营\images\W13L2-1-Lifecycle.png) 

### Children

- Content 型

  ```
  //	组件内部写了多少个 children 实际就是多少个 children
  <my-button> <img src="{{icon}}" /> {{title}} </my-button>
  ```

- Template 型

  ```
  //	组件内部写了一个 children 实际上会根据 data 渲染出多个 children
  <my-list>
  	<li> <img src="{{icon}}" /> {{title}} </li>
  </my-list>
  ```
