# Week3-lesson 1	JavaScript表达式，类型转换

# Grammar

## Tree vs Priority

- \+  \- 
- \*  /
- ()

### Expressions			(ECMA-262 Page-201)

#### Member 

- a.b
- a[b]
- foo\`string\`
- super.b				super 现在是个关键字，在构造函数中使用，调用父类
- super['b']
- new.target			在函数中使用，判断函数是被 new 调用还是普通使用
- new Foo()

#### New

- new Foo


#### Call

- foo()
- super()
- foo()['b']
- foo().b
- foo()\`abc\`

#### Left Handside && Right Handside



#### Update			(ECMA-262 Page-178)

- a ++
- a --
- ++ a
- -- a

#### Unary

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

#### Multiplicative

- \* / %

#### Addtive

- \+ \-

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

#### 

- ,

### Reference

- Object
- Key
- delete
- assign

# Week3-lesson 2	语句

## Atom

### Grammar

#### 简单语句

- ExpressionStatement	表达式语句		 a = 1 + 2;
- EmptyStatement		空语句			  ;
- DebuggerStatement		调式语句		 debugger
- ThrowStatement						throw a;
- ContinueStatement						continue label;
- breakStatement						break label;
- ReturnStatement						return 1+2;

#### 组合语句

- BlockStatement	把多条语句括起来变成一条语句

  + [[type]]: normal
    + [[value]]: --
    + [[target]]: --

  {
  	//	...
  }

- Iteration

  + while(...) ...
  + do ... while(...);
  + for(...; ...; ...) ...
  + for(... in ...) ...
  + for(... of ...) ...

#### 声明

- FunctionDeclaration
- GeneratorDeclaration
- AsyncFunctionDeclaration
- AsyncGeneratorDeclaration
- VariableStatement
- ClassDeclaration
- LexicalDeclaration

### Runtime

#### Completion Record

- [[type]]:normal , break , continue , return , throw
- [[value]]:Types
- [[target]]:label

#### Lexical Enviorment



