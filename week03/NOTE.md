# Week3-lesson 1	JavaScript表达式，类型转换

## Grammar

### Tree vs Priority

- \+  \- 
- \*  /
- ()

！图片  表达式 树的结构 和 运算符的优先级

### Left-Hand Side & Right-Hand Side

#### Left-Hand-Side Expressions 	(ECMA-262 Page-201，12.3)

  左手表达式必须是 reference 值，运行时必须是 reference，语法上是 left-hand side ；

  包括：Member 、New 、Call 。

  ```
  例：
  a.b = c
  a + b = c
  ```

#### Right-Hand-Side Expressions 	(ECMA-262 ，12.4 - 12.16)

  包括：Update 、Unary 、Exponent  等


具体结构内容下方 Expression 有列出。

### Expressions

运算符优先级（从高到低）

#### Member 

MemberExpression 返回的是一个 Reference 类型

- a.b

- a[b]

- foo\`string\`

  ```
  var name = 'fang';
  function foo(){
  	console.log(arguments);
  }
  
  foo`Hello ${name} !`
  ```

- super.b				super 现在是个关键字，在构造函数中使用，调用父类

  ```
  class Parent {
  	constructor(){
  		tihs.a = 1;
  	}
  }
  class Child extends Parent {
  	constructor(){
  		super();
  		console.log(super.a);
  	}
  }
  
  new Child
  ```

- super['b']

- new.target			在函数中使用，判断函数是被 new 调用还是普通调用 （关键字）

- new Foo()

#### New

- new Foo

  ```
  （与上面 Member 里的 new Foo() 优先级不同）
  实例：
  function foo1(arg){
  	console.log('1',arg)
  }
  
  function foo2(arg){
  	console.log('2',arg)
  	return foo1
  }
  
  new foo1					//	object foo1{}
  new foo1()					//	object foo1{}
  
  foo2()						//	function foo1(){}
  new foo2					//	function foo1(){}
  new foo2()					//	function foo1(){}
  (new foo2)()				//	undefined
  
  new (foo2())				//	object foo1{}
  
  new new foo2()				//	object foo1{}
  new (new foo2() )			//	object foo1{}
  new (new foo2)()			//	object foo1{}
  
  思考：new new foo2() = new (new foo2() ) ? new (new foo2)() ，
  	 是先执行 new foo2() 还是 new foo2 ？ 哪个优先级更高？ 通过传入参数来确定。
  
  new new foo2('hello')		//	2 hello
  new (new foo2('hello') )	//	2 hello
  new (new foo2)('hello')		//	1 hello
  结论：通过结果看到，先执行的是 new foo2() 说明 new Foo() 比 new Foo 运算优先级更高。
  ```


#### Call

- foo()

- super()

- foo()['b']

  ```
  function foo(){
  	return {b: 1}
  }
  
  new foo()['b']			//	1
  (new foo())['b']		//	1
  new (foo()['b'])		//	Uncaught TypeError: foo(...).b is not a constructor 
  						  ( foo().b 是 number ，不是 function )
  结论：先执行foo() ，再取['b']。
  
  foo['a'] = function (){}
  
  new foo['a']			//	object foo.a{}
  new (foo['a'])			//	object foo.a{}
  (new foo)['a']			//	undefined			( new foo 返回 {b: 1} )
  结论： member 运算比 new 优先级要高。
  ```

- foo().b

- foo()\`abc\`

#### Update			(ECMA-262 Page-210，12.4)

- a ++
- a --
- ++ a
- -- a

```
++ a ++ 		//	会先执行后自增，再进行前自增，等效于  ++ (a ++)
```

#### Unary			(ECMA-262 Page-212，12.5)

- delete a.b
- void foo()		void 把后面的东西（无论是什么）变为 undefined
- typeof a
- +a
- -a
- ~a
- !a
- await a

#### Exponent

- **

```
3 ** 2 ** 3				//	* 是右结合的，等效于  3 ** ( 2 ** 3 )
```

#### Multiplicative

- \* 
- %

#### Addtive

- \+ 
- \- 

#### Shift

- <<
- \>\> 
- <<<

#### Relationship

- <
- \> 
- <=
- \>=
- instanceof
- in

#### Logical

- &&
- ||

#### Conditional

- ? :

#### Equality

- ==
- !=
- ===
- !==

#### Bitwise

- &
- ^
- |

#### Comma

- ,								（逗号表达式 永远返回逗号后面的值）

```
var a = (1,2,3);
console.log(a);				//	3
```

## Runtime

### Type Convertion  类型转换

(ECMA-262 Page-53，7.1)

![](F:\test\自学-极客大学\前端训练营\images\W3L1-1-类型转换.jpg)

#### 装箱 Boxing

- Number() 、String() 、Boolean() 、Symbol()  强制类型转化，将括号内容转为相应的类型；
- 使用 new 调用以上方法时，会是一个 object 类型；（ Symbol() 不能 new ，只能用 Object(Symbol()) 才能得到 object 类型）这个调用成为装箱。

#### 拆箱 Unboxing

- toPrimitive
- valueOf
- toString

toPrimitive 操作中会执行 valueOf 和 toString 方法，调用顺序根据情况会不同；
如： Date.prototype.toJSON ()
(具体可参考：ECMA-262 Page-54，7.1.1 、Page-464 )

### Reference

组成：

- Object
- Key

Reference 类型类似于其他语言的指针，是一个既能读又能写的参数，将其传入函数，可以在函数中去写这个属性；
如果把运算符看作一个函数，（其他运算符只具有读的能力）只有以下两种方法才有写的能力，才体现引用的特点；在此外的其他情况下，与普通类型没什么区别。（只有 member 运算才能保持引用的特性，写其他的会失败）

- delete
- assign

## Tips - 参考资料及名词解释

- IIFE ：Immediately-invoked Function Expressions 立即执行的函数表达式
- 运算符优先级： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

# Week3-lesson 2	JavaScript语句，对象

## Atom

### Grammar

#### 简单语句

- ExpressionStatement	表达式语句		 a = 1 + 2;
- EmptyStatement		空语句			  ;
- DebuggerStatement		调式语句		 debugger;
- ThrowStatement						throw a;
- ContinueStatement						continue label;
- breakStatement						break label;
- ReturnStatement						return 1+2;

#### 组合语句

- BlockStatement	把多条语句括起来变成语法上的一条语句;还提供作用域等作用

  + [[type]]: normal
  + [[value]]: --
  + [[target]]: --

  ```
  形式及实例：
  {
  	var a = 1;				//	普通语句执行结果都为 normal
  	throw 2;				//	此句执行结果为 throw ，后面语句不会执行
  	let b = 3;
  	b = function(){}
  }
  ```

  ✿✿注意：当 BlockStatement 中的语句有非 normal 的结果产生时，BlockStatement 会中断，后面语句不会执行。

- IterationStatement  循环语句

  + while(...) ...
  + do ... while(...);			      （区别： do..while.. 至少执行一次，while 可能一次不执行）
  + for(...; ...; ...) ...
  + for(... in ...) ...        			（循环 Object 的 key ）
  + for(... of ...) ...        			（可循环 Array 的 元素 ，Generator 函数 等具有迭代特点的对象）
  + for await (... of ...)

  ```
  概念理解：
  while 会消费掉 break 、continue 等，子语句出现 break 、continue 时，while 会做对应的处理，循环会终止或继续执行下一次，但当前这次的 Block 已经中断了，非 normal 语句后面的语句不会执行。
  
  如果 Completion Record 带着 label ，Iteration 语句会根据自己的 label 来消费，如果 label 不匹配，不会消费，会产生 break 断掉，如果它的上层循环有对应的 label ，才被消费掉。
  
  例：
  while(i>0){
  	var a = 1;				
  	continue;
  	let b = 3;
  	b = function(){}
  }
  ```

- LabelledStatement

- SwitchStatement

- ContinueStatement 、BreakStatement

  + [[type]]: break 、continue
  + [[value]]: --
  + [[target]]: label

（ Iteration、Labelled、switch 、break 、continue 的 Completion Record 可归为一类）

- IfStatement

- WithStatement

- TryStatement

  + [[type]]: return
  + [[value]]: --
  + [[target]]: label

  ```
  形式及实例：
  try{
  	...
  }catch(...){
  	...
  }finally{
  	...
  }
  ```


#### 声明

- FunctionDeclaration						function foo(){}
- GeneratorDeclaration						function* foo(){}
- AsyncFunctionDeclaration					async function foo(){}
- AsyncGeneratorDeclaration					async function* foo(){}
- VariableStatement							var 
- ClassDeclaration							class cls{}
- LexicalDeclaration

✿✿✿注意：预处理机制		(ECMA-262 Page-252，13.3.2)

1. var 变量声明出现在函数体内的任意位置都是等效的，会做预处理提升，起到的作用都是针对整个function 的作用域，不受块级作用域影响；但表达式的部分不会随声明同时执行，需要执行到那行代码；
   var 声明在子结构中，在某些情况下会影响部分代码执行的行为，因此在做 var 声明时，最好写在函数的最前面，至少要在这个变量名第一次出现的地方之前，不要在任何内部的 Block 中写 var ，可用 let 、const 代替。
2. 函数声明也有预处理提升的过程，它的内容也会随着声明同时执行，生效可用。
3. 其他的声明不会提前，所以要在使用之前做声明。

```
//	变量、函数提升
function foo(){
	foo2();					    //	2
	console.log(i);				//	undefined
	return;
	var i = 1;
	function foo2(){
		console.log(2);
	}
}
foo();

var i 变量和 function foo2 函数声明虽然在 return 之后，但是都会提升；
不过 i = 1 不会随变量声明提升一起执行，所以 i 的结果是 undefined，
而函数 foo2(){} 的内容会随函数声明提升一起执行，所以可以得到结果 2 
```

```
//	var 对代码行为的影响
var a = 1;
void function(){
	a = 2;
	return;
	a = 3;
}();
console.log(a);				//	2

var a = 1;
void function(){
	a = 2;
	return;
	var a = 3;				//	var 对执行结果的影响
}();
console.log(a);				//	1
```

### Runtime

#### Completion Record

- [[type]]:normal , break , continue , return , throw
- [[value]]:Types
- [[target]]:label

[target]只有 break 和 continue 会用这个属性，也只有循环语句中才识别这个属性；
[value]只有 return 和 throw 会用；

#### Lexical Enviorment

## Object

三要素：状态、行为、唯一性
任何一个对象都是唯一的，这与它本身的状态无关；即使状态完全一直的两个对象，也并不相等。
我们用状态来描述对象；而状态的改变即是行为。

### 面向对象

面向对象编程（Object Oriented Programming）只是一种编程范型（Programming Paradigm），其核心概念是“对象”（Object）。
在这一编程范型之下存在多种不同的风格（Style）。
OC、C++、JAVA 之类的面向对象编程语言称之为 Class-based OOP Language （基于“类”的面向对象编程语言）；
而如 NewtonScript、Self、Javascript 之类的语言则称之为 Prototype-based OOP Language （基于“原型”的面向对象编程语言）。
（印象笔记 - 基于类、基于原型）

#### Class-based Object Oriented Programming

分为两个流派：归类 和 分类

- 归类
  对象归为某个类；
  可能某个对象属于多个类，会产生重叠，即 存在多重继承；
  如：C++
- 分类
  将 Object 分为各种基类，是单继承结构; 
  提供 interface（接口）来解决将两个分支中的类抽象到一起的问题；
  提供 mixin 来解决复用的问题；
  如：JAVA

#### Prototype-based Object Oriented Programming

采用“相似”这样的方式去描述对象，任何对象只需要描述它自己与原型的区别即可。
（如：绵羊 自己与它的原型-羊 的区别是毛更多）

### object API/Grammar

#### 基本的对象能力

（不带有任何 Class-based 和 Prototype-based 的特点）

- {}
- .
- []
- Object.defineProperty

#### 基于原型

- Object.create
- Object.setPropertyOf
- Object.getPropertyOf

#### 基于类

- new
- class
- extends

#### 其他 （已被代替，可弃用）

- new
- function
- prototype

### Special Object

(ECMA-262 Page-125，9.3 - 9.4)

#### Funtion Object

函数对象除了拥有一般对象的 [[prototype]] 原型 和 property 属性，还有一个行为 [[call]]

#### Array Object

[[length]]

## JavaScript 中的对象模型

要素：一个 [[prototype]] 原型 和 多个 property 属性
当我们访问一个属性时，如果当前对象没有，则会沿着原型往外找，找原型对象是否有此名称的属性，一直找到最外层 object.prototype ，而原型对象还可能有原型，因此产生“原型链”。

### Property

JavaScript 用属性来统一抽象对象状态和行为，它的 property 都是 key:value 对；
key 可能是 String 或 Symbol ，value 可能是 Data 和 Accessor

- Data Property
  包含4个 attribute ：[[value]]、writable、enumerable、configurable
- Accessor Property
  包含4个 attribute ：get、set、enumerable、configurable

一般来说，数据行书用于描述状态，访问器属性用于描述行为；若数据属性中存储函数，也可以用于描述行为。


## Tips-名词解释

- 作用域
  源代码里变量生效的范围 的文本区域
- 上下文
  用户电脑上 JavaScript 引擎执行代码的时候存变量的地方 那块内存
- object exercise
  狗咬人  是人的行为			状态的改变即是行为
  ✿在设计对象的状态和行为时，要遵循“行为改变状态”的原则
- OC： Objective-C 是一种通用、高级、面向对象的编程语言。它扩展了标准的 ANSI C 编程语言，将 Smalltalk 式的消息传递机制加入到 ANSI C 中。当前主要支持的编译器有 GCC 和 Clang（采用 LLVM 作为后端）。