# Week6-lesson 1	浏览器工作原理 2

## 有限状态机

- 每一个状态都是一个机器
	+ 在每一个机器里，我们可以做计算、存储、输出...
	+ 所有的这些机器接受的输入是一致的
	+ 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数（无副作用）
- 每一个机器知道下一个状态
	+ 每个机器都有确定的下一个状态（Moore）
	+ 每个机器根据输入决定下一额状态（Mealy）

### 使用有限的状态机处理字符串

- 在一个字符串中，找到字符 "a"

```
function match(string) {
	for(let c of string) {
		if(c == "a")
			return true;
	}
	return false;
}

match("I am groot")
```

- 在一个字符串中，找到字符 "ab"

```
function match(string) {
	let foundA = false;
	for(let c of string) {
		if(c == "a")
			foundA = true;
		else if(foundA && c == "b")
			return true;
		else
			foundA = false;
	}
	return false;
}

match("I am abcd")
```

- 在一个字符串中，找到字符 "abcdef"

```
function match(string) {
	let foundA = false;
	let foundB = false;
	let foundC = false;
	let foundD = false;
	let foundE = false;
	for(let c of string) {
		if(c == "a")
			foundA = true;
		else if(foundA && c == "b")
			foundB = true;
		else if(foundA && c == "c")
			foundC = true;
		else if(foundA && c == "d")
			foundD = true;
		else if(foundA && c == "e")
			foundE = true;
		else if(foundA && c == "f")
			return true;
		else
			foundA = false;
			foundB = false;
			foundC = false;
			foundD = false;
			foundE = false;
	}
	return false;
}

match("I am groot abcdef")		//	写法仅是思路，此处有 BUG ，当字符串为"aabcdef" ，返回的是 false
```

### JS 中的有限状态机（Mealy）

```
//	每个函数是一个状态
function state(input)		//	函数的参数就是输入
{
	//	在函数中，可以自由地编写代码，处理每个状态的逻辑
	return next;	//	返回值作为下一个状态
}

//	以下是调用
while(input){
	//	获取输入
	state = state(input);	//	把状态机的返回值作为下一个状态
}
```

- [将上面的找字符串`"abcdef"`改为 JS状态机 的写法](F:\test\自学-极客大学\前端训练营\code\browser\match.js) ：（笔记中：match.js）

```
function match(string){
    let state = start;
    for(let c of string){
        state = state(c);
    }
    return state === end;
}

function start(c){
    if(c === "a"){
        return foundA;
    }else{
        return start;
    }
}

function end(c){
    return end;
}

function foundA(c){
    if(c === "b"){
        return foundB;
    }else{
        return start;
    }
}

function foundB(c){
    if(c === "c"){
        return foundC;
    }else{
        return start;
    }
}

function foundC(c){
    if(c === "d"){
        return foundD;
    }else{
        return start;
    }
}

function foundD(c){
    if(c === "e"){
        return foundE;
    }else{
        return start;
    }
}

function foundE(c){
    if(c === "f"){
        return end;
    }else{
        return start;
    }
}

match("I am groot abcdef")		//	写法仅是思路，此处有 BUG ，当字符串为"aabcdef" ，返回的是 false 
							  //  正确写法在 match.js 中修正
```

- 在一个字符串中，找到字符 "abcabx"	

  代码： [abcabx.js](F:\testSpace\geek\Frontend-01-Template\week06\find-abcabx.js) （ 处理方法同 match.js ）

  ```
  function match(string){
      let state = start;
      for(let c of string){
          state = state(c);
      }
      return state === end;
  }
  
  function start(c){
      if(c === "a"){
          return foundA;
      }else{
          return start;
      }
  }
  
  function end(c){
      return end;
  }
  
  function foundA(c){
      if(c === "b"){
          return foundB;
      }else{
          return start(c);
      }
  }
  
  function foundB(c){
      if(c === "c"){
          return foundC;
      }else{
          return start(c);
      }
  }
  
  function foundC(c){
      if(c === "a"){
          return foundA2;
      }else{
          return start(c);
      }
  }
  
  function foundA2(c){
      if(c === "b"){
          return foundB2;
      }else{
          return start(c);
      }
  }
  
  function foundB2(c){
      if(c === "x"){
          return end;
      }else{
          return foundB(c);
      }
  }
  
  console.log(match("abcabcabx"));
  ```

- 作业：在一个字符串中，找到字符 "abababx"

  ​		   使用状态机处理完全未知的 pattern （可选） ---   参考  字符串KMP算法（注：KMP 算法是非状态机的写法）


## HTML 的解析

### 第一步：拆分文件

- 为了方便文件管理，把 parser 单独拆到文件中
- parser 接受 HTML 文本作为参数，返回一棵 DOM 树

代码初步实现： [2-1 splitFile \ parser.js](F:\test\自学-极客大学\前端训练营\code\browser\2- HTML---parse\2-1 splitFile\parser.js) 

### 第二步：创建状态机

参考资料： [(HTML-Standard Page-1057，12.2.5 )]( https://html.spec.whatwg.org/multipage/parsing.html#tokenization) 

- 用 FSM(有限状态机) 来实现 HTML 的分析
- 在 HTML 标准中，已经规定了 HTML 的状态       （即 参考资料 的章节）

代码初步实现： [2-2 initFSM \ parser.js](F:\test\自学-极客大学\前端训练营\code\browser\2- HTML---parse\2-2 initFSM\parser.js) 

### 第三步：解析标签

 [解析过程图解](F:\test\自学-极客大学\前端训练营\资料\浏览器工作原理\fsm.html)  		（笔记中：fsm.html）

- 主要的标签有：开始标签、结束标签和自封闭标签
- 此处暂时忽略属性，后面逐步完善处理

代码初步实现： [2-3 parseTag \ parser.js](F:\test\自学-极客大学\前端训练营\code\browser\2- HTML---parse\2-3 parseTag\parser.js) 

### 第四步：创建元素

- 在状态机中，除了状态迁移，我们还会要加入业务逻辑
- 在标签结束状态提交标签 Token

代码初步实现： [2-4 emitToken \ parser.js](F:\test\自学-极客大学\前端训练营\code\browser\2- HTML---parse\2-4 emitToken\parser.js) 

### 第五步：处理属性

- 属性值分为单引号、双引号、无引号三种写法，需要多个状态处理
- 处理属性的方式跟标签类似
- 属性结束时，把属性加到当前标签 Token 上

代码初步实现： [2-5 attribute \ parser.js](F:\test\自学-极客大学\前端训练营\code\browser\2- HTML---parse\2-5 attribute\parser.js) 

### 第六步：构建 DOM 树

 [标签入栈出栈图解](F:\test\自学-极客大学\前端训练营\资料\浏览器工作原理\stack.html)  		（笔记中：stack.html）

- 从标签构建 DOM 树的基本技巧是使用栈
- 遇到开始标签时创建元素并入栈，遇到结束标签时出栈
- 自封闭节点可视为入栈后立刻出栈
- 任何元素的父元素是它入栈前的栈顶

### 第七步：文本节点

- 文本节点与自封闭标签处理类似
- 多个文本节点需要合并

## Tips - 参考资料及名词解释

- [Mealy ](https://zh.wikipedia.org/wiki/米利型有限状态机)：在计算理论中，米利型有限状态机（英语：Mealy machine）是基于它的当前状态和输入生成输出的有限状态自动机（更精确的叫有限状态变换器）。这意味着它的状态图将为每个转移边包括输入和输出二者。与输出只依赖于机器当前状态的摩尔有限状态机不同，它的输出与当前状态和输入都有关。但是对于每个 Mealy 机都有一个等价的 Moore 机，该等价的 Moore 机的状态数量上限是所对应 Mealy 机状态数量和输出数量的乘积加 1（|S’|=|S|*|Λ|+1）。
- 字符串 KMP 算法：https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm

# Week6-lesson 2	浏览器工作原理 3

## 环境准备

npm install css

## CSS

### 第一步：收集 CSS 规则

- 遇到 style 标签时，把 CSS 规则保存起来
- 调用 css parser 来分析 CSS 规则
- 此处需要仔细研究 css 库分析 CSS 规则的格式

### 第二步：添加调用

- 当我们创建一个元素后，立即计算 CSS
- 理论上，在分析一个元素时，所有 CSS 规则应该都已经收集完毕
- 真实浏览器中，有写在 body 的 style 标签，需要重新进行 CSS 计算的情况，此处忽略，做简易版

### 第三步：获取父元素序列

- 在 computeCSS 函数中，必须知道元素的所有父元素才能判断元素与规则是否匹配

- 从上一步骤的 stack ，可以获取本元素所有的父元素

- 因为首先获取的是“当前元素”，所以在获取和计算父元素匹配的顺序时，应该从内向外

  （如：div div #id {} ，#id 一定匹配当前元素，然后再往外匹配，父级是否是 div ；而由外向内 div 不知道匹配那个元素，相比浏览器的性能会更差）

### 第四步：拆分选择器

- 选择器也要从当前元素向外排列
- 复杂选择器拆成针对单个元素的选择器，用循环匹配父元素队列

### 第五步：计算选择器与元素匹配

- 根据选择器的类型和元素属性，计算是否与当前元素匹配
- 此处仅实现三种基本选择器，忽略实际浏览器中的符合选择器处理

