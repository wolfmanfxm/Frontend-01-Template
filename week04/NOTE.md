# Week4-lesson 1	结构化 

## [Objective-C](https://zh.wikipedia.org/wiki/Objective-C) 

[OC 运行 JS 代码](F:\test\自学-极客大学\前端训练营\code\OCdemo.m) ：（笔记中：OCdemo.m）

- evaluateScript 执行代码
- callWithArguments 调用函数

这两个方法每使用一次都会产生一个宏任务
![](F:\test\自学-极客大学\前端训练营\images\W4L1-0-任务分解.png)

## 宏任务

不是 JavaScript 语言和 JavaScript 引擎的一部分，是操作系统编译的

每个宏任务里有多个微任务，只有当前宏任务内的所有微任务都执行完，才会执行下一个宏任务；
（每一个代码片段 evaluateScript ，一次函数执行 callWithArguments ，click 事件，setTimeout 等都是一个宏任务）
（ click 、keyup 事件、setTimeout 、setInterval 等都是 WebAPI ，不是 JS 的）

## 微任务

保存在 JavaScript 的执行队列，在 JavaScript 引擎内
（JS 代码都是微任务，只是由于处于不同的代码片段等因素，构成了不同的宏任务；一切 JS 代码都是在微任务里执行的，同步代码归为一个微任务，JS 中只有 Promise 会产生新的微任务）

(ECMA-262 Page-104，8.6)

## 事件循环

多个宏任务形成的`宏任务队列`即为 事件循环，
多个微任务组成的`微任务队列`构成一个 宏任务。

### Event Loop 图解

![](F:\test\自学-极客大学\前端训练营\images\W4L1-事件循环\1-1.gif)
![](F:\test\自学-极客大学\前端训练营\images\W4L1-事件循环\1-2.gif)
![](F:\test\自学-极客大学\前端训练营\images\W4L1-事件循环\1-3.gif)
![](F:\test\自学-极客大学\前端训练营\images\W4L1-事件循环\1-4.gif)
![](F:\test\自学-极客大学\前端训练营\images\W4L1-事件循环\1-5.gif)

实例及整体流程图：

```
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();
```

![](F:\test\自学-极客大学\前端训练营\images\W4L1-事件循环\2-1.gif) 


## 实例分析

```
new Promise(resolve => resolve()).then(()=>console.log("1"));

setTimeout(function(){
	console.log("2");
},0)

console.log("3");
```

![](F:\test\自学-极客大学\前端训练营\images\W4L1-1-宏任务微任务.png)
第一个宏任务输出 3 1 ，第二个宏任务输出 2 ，执行结果中`向左的小箭头` undefined 是分隔两个宏任务的标志；

```
new Promise(resolve => resolve())
.then(()=>{
	console.log("1");
	this.a = 4;
});

setTimeout(function(){
	console.log("2");
	console.log(this.a);
},0)

console.log("3"), function(){ return this.a };
```

![](F:\test\自学-极客大学\前端训练营\images\W4L1-2-宏任务微任务.png)
第一个宏任务输出 3 1 ，返回 function(){ return this.a } ；
(等同 OC 代码中的 [context evaluateScript:code] ，产生第一个宏任务)
第二个宏任务输出 2 4 ；
( setTimeout 不是 JS 语法的 API ，是浏览器提供的 WebAPI ，因此产生第二个宏任务
  等同 OC 代码中的 [result callWithArguments:@[]] ，setTimeout 调用了 function  )
执行结果中`向左的小箭头` ƒ (){ return this.a } 分隔了两个宏任务；

```
async function foo(){
	console.log("0");
	await new Promise(resolve => resolve());
	console.log("1");
}

new Promise(resolve => (console.log("2"), resolve()))
	.then(()=> (
		console.log("3"),
		new Promise(resolve => resolve())
			.then(()=>console.log("4"))
	));

setTimeout(function(){
	console.log("5");
	new Promise(resolve => resolve()).then(()=>console.log("6"))
},0)

console.log("7");
console.log("8");
foo();
```

1. 宏任务 一

   - 微任务 一			输出 2 7 8 0

     ```
     new Promise(resolve => (console.log("2"), resolve()))
     	.then(()=> (
     		console.log("3"),
     		new Promise(resolve => resolve())
     			.then(()=>console.log("4"))
     	));
     
     console.log("7");
     console.log("8");
     foo();
     
     async function foo(){
     	console.log("0");
     	await new Promise(resolve => resolve());
     	console.log("1");
     }
     ```

   - 微任务 二			输出 3 ，返回 Promise {<resolved>: undefined}

     ```
     ()=> (
     		console.log("3"),
     		new Promise(resolve => resolve())
     			.then(()=>console.log("4"))
     )
     
     await new Promise(resolve => resolve());
     console.log("1");
     ```

   - 微任务 三			输出 1

     ```
     ()=>console.log("4")
     
     console.log("1");
     ```

   - 微任务 四			输出 4

     ```
     console.log("4")
     ```

2. 宏任务 二

   - 微任务 一			输出 5

     ```
     setTimeout(function(){
     	console.log("5");
     	new Promise(resolve => resolve()).then(()=>console.log("6"))
     },0)
     ```

   - 微任务 二			输出 6

     ```
     ()=>console.log("6")
     ```

## Tips - 参考资料

- [JS 可视化：事件循环](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif) ：https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

