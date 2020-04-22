# Week2-lesson 1	编程语言通识与JavaScript语言设计

## 编程语言通识

### 语言按语法分类

- 非形式语言
  中文、英文
- 形式语言	（乔姆斯基 谱系）
  + 0型	无限制文法
  + 1型	上下文相关文法
  + 2型	上下文无关文法
  + 3型	正则文法

### 产生式（BNF-巴科斯诺尔范式）

- 用尖括号括起来的名称来表示语法结构名

- 语法结构分成基础结构和需要用其他语法结构定义的复合结构

  + 基础结构称终结符
  + 复合结构称非终结符

- 引号和中间的字符表示终结符

- 可以有括号

- \* 表示重复多次

- |  表示或

- \+ 表示至少一次

  ```
  例：	
  四则运算：1+2*3
  终结符：Number 、+ 、- 、* 、/
  非终结符：MultiplicativeExpression 、AdditiveExpression
  
  <Number> ::= "0" | "1" | "2" | "3" | "4 | "5" | "6" | "7" | "8" | "9" 
  <DecimalNumber> ::= "0" | (("1" | "2" | "3" | "4 | "5" | "6" | "7" | "8" | "9") <Number>* )
  
  <addExpression> ::= <multExpression> | 
  	<multExpression> "+" <multExpression> |
  	<multExpression> "-" <multExpression>
  <multExpression> ::= <DecialNumber> | 
  	<multExpression> "*" <multExpression> |
  	<multExpression> "/" <multExpression>
  <bracketsExpression> ::= <addExpression> |
  	"(" <addExpression> ")"
  <mixExpression> ::= <bracketsExpression>
  
  ✿✿✿注：与老师不同，待看
  ```

### 通过产生式理解乔姆斯基谱系

- 0型	无限制文法

  ```
  ? ::= ?			等号左右两边可以有多个非终结符
  例：
  <a> <b> ::= "c" <d>			//	
  <a> <b> ::= "c" 			//	
  ```

- 1型	上下文相关文法

  ```
  ?1 <A> ?2 ::= ?1 <B> ?2			在 ?1 和 ?2 的上下文内 ，<A> 只能与 <B> 对应
  例：
  "a" <b> "c" ::= "a" "x" "c"			//	<b> = "x"
  
  {
  	get a { return 1 }			   //	 此时 get 为方法
  	get : 1						  //	此时 get 为对象的一个key名
  }
  ```

- 2型	上下文无关文法

  ```
  <A> ::= ?			等号左边只能有一个非终结符 ，无论 <A> 在哪个位置，它始终都是由 ? 的内容产生
  例：
  <Number> ::= "0" | "1" | "2" | "3" | "4 | "5" | "6" | "7" | "8" | "9" 
  2**1**2
  ```

- 3型	正则文法

  ```
  <A> ::= <A> ?		只允许左递归 ，若存在递归 <A> 一定在最左边
  ```

  小练习：将四则运算用正则文法写出来

### 其他产生式

- EBNF
- ABNF
- Cusomized

### 现代语言的特例

- C++ 中，* 可能表示乘号或者指针，具体是哪个，取决于星号前面的标识符是否被声明为类型
- VB 中，< 可能是小于号，也可能是XML直接量的开始，却绝育当前位置是否可以接受XML直接量
- Python 中，行首的tab符和空格会根据上一行的行首空白以一定规则被处理成虚拟终结符indent 或者 dedent
- JavaScript 中，/ 可能是除号，也可能是正则表达式开头，处理方式类似于 VB 、jsx ，字符串模板中也需要特殊处理 } ，还有自动插入分号规则

## 图灵完备性

### 图灵完备性

- 命令式 —— 图灵机
  + goto
  + if 和 while
- 声明式 —— lambda
  + 递归

## 动态与静态

- 动态
  + 在用户的设备 / 在线服务器上
  + 产品实际运行时
  + Runtime
- 静态
  + 在程序员的设备
  + 产品开发时
  + Compiletime

## 类型系统

- 动态类型系统与静态类型系统
- 强类型与弱类型	（无隐式转换的为强类型，有隐式转换的为弱类型）
  + String + Number		（隐式类型转换：Number转为String）
  + String == Boolean		（隐式类型转换：Boolean转为Number，再与String对比）
- 复合类型
  + 结构体			（对象就是一个结构体，每一个属性都有一个类型）
    ` { a: T1, b: T2} `
  + 函数签名			（较复杂）
    ` (T1, T2) => T3 `
- 子类型

  + 协变：凡是能用 Array<Parent> 的地方，都能用 Array<Child>
  + 逆变：凡是能用 Function<Child> 的地方，都能用 Function<Parent>

## 一般命令式编程语言 

### Atom

- Identifier
- Literal

### Expression

- Atom
- Operator
- Punctuator

### Statement

- Expression
- Keyword
- Punctuator

### Structure

- Function
- Class
- Process
- Namespace
- ...

### Program

- Program
- Module
- Package
- Library

## 重学 JavaScript

- 语法
- 语义
- 运行时


# Week2-lesson 2	JavaScript词法、类型

（ECMA-262	A.1 Lexical Grammar）

## [Unicode](https://www.fileformat.info/info/unicode/)

### Blocks

#### [Basic Latin](https://www.fileformat.info/info/unicode/block/basic_latin/list.htm)

```
for (let i=0; i<128; i++){
	document.write(i + "<span style='background-color:lightgreen;'>" + String.fromCharCode(i) + "</span><br/>")
}
```

#### [CJK Unified Ideographs](https://www.fileformat.info/info/unicode/block/cjk_unified_ideographs/list.htm) 	(Chinese Japanese Korean)

#### Tips

- bmp 基本字符平面	（范围：U+0000 - U+FFFF ；四位数）
  `String.fromCharCode()`

- 非基本字符平面		（范围：U+10000 - ... ；五位数）
  `String.fromCodePoint()` 、`"".codePointAt()`

  ```
  例：
  "厉害".codePointAt(0).toString(16)		//	"厉" 转为 16进制的 Unicode
  "厉害".codePointAt(0).toString(16)		//	"害" 转为 16进制的 Unicode
  ```

### Categories - 类别

#### [Separator, Space](https://www.fileformat.info/info/unicode/category/Zs/list.htm)

## 词法分析	

### InputElement		词

- WhiteSpace 			空格
  <TAB> <VT> <FF> <SP> <NBSP> <ZWNBSP> <USP>
  `tips：nbsp 产生空格，但不会断词，可用来处理排版问题`	（JavaScript中排版是以词换行）

- LineTerminator 		换行
  <LF> <CR> <LS> <PS>

- Comment 				注释
  //	、  /* */

- Token 				词、记号、标记、令牌、... （JavaScript中一切有效的东西都叫token，除了前三样）

  + Punctuator 					符号
  + Keywords					关键字
  + Identifier					标识符
    * 变量名	（不能与关键字重名）
    * 属性名	（可以跟关键字重名）
  + Literal 					直接量	（数字、字符串等）
    * Number
    * String
    * Boolean
    * Null
    * Undefined
    * Symbol
    * Object

  ✿ 前两类帮助代码程序形成结构，后两类为代码写出来的有效信息
  新标准中将 Keywords 和 Identifier 合为了一个类：IdentifierName ，IdentifierName 只能以字母开头（$ 、_ 也可，但这两种较为特殊）。

#### Number

- IEEE 754 Double Float		（一共 64 位）

  + Sign	(1)				符号位（表示 正负）占一位
  + Exponent	(11)		科学计数法e（指数位、幂）占十一位
  + Fraction	(52)		精度部分（小数位）占五十二位

  ![](F:\test\自学-极客大学\前端训练营\images\W2L2-1.jpg)

- 语法

  + DecimalLiteral （十进制）
    合法写法：0  ,  0.  ,  .0  ,  1e3
  + BinaryIntegerLiteral （二进制）
    以 `0b` 开头  : 0b111  ,  0b1111
  + OctalIntegerLiteral （八进制）
    以 `0o` 开头  : 0o10  ,  0o623
  + HexIntegerLiteral （十六进制）
    以 `0x` 开头  : 0xFF  ,  0x1A4F

  （ 各进制开头的后面有多少位数无限制，parseInt(string , num) 接受第二个参数为某进制转换，默认为10 ）

- 注意

  + Safe Integer 安全整数范围

    ```
    Number.MAX_SAFE_INTEGER.toString(16)		//	"1fffffffffffff"
    ```

  + Float Compare 浮点数比较

    ```
    精度差值
    Number.EPSILON								 //	  2.220446049250313e-16
    
    //	JavaScript 中 浮点数 作比较认为小于精度差值 即为相等
    0.1 + 0.2 === 0.3							  //  false
    Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON		//	true
    
    ✿ 会存在误差，如果想准确作比较，只能先转成整数
    ```

#### String

- String

  + Character		字符
        * ASCII		( 0-128 )
        * Unicode	
        * UCS		( U+0000 - U+FFFF 即 bmp )
        * GB		( ASCII 和中文 )
        * ISO-8859	( ASCII 和欧洲文字 )
        * BIG5		( ASCII 和繁体中文 )

    + Code Point	码点
      JavaScript 中超过 bmp 范围的字符会被当成两个代码单元，即两个码点

    + Encoding		编码

      * UTF	( UTF-8 、UTF-16)
        ![](F:\test\自学-极客大学\前端训练营\images\W2L2-2.jpg)

        ![](F:\test\自学-极客大学\前端训练营\images\W2L2-3.jpg)

- 语法

  ```
  合法写法：
  "a"  ,  'a'  ,  `a`  
  
  //	反斜杠转义
  "\x1F"			\x 后跟两位十六进制数
  "\u000A"		\u 后跟四位十六进制数
  "\""			代表 " 自身
  "\b" , "\f" , "\n" , "\r" , "\t" , "\v"		表示几个特殊字符 （ECMA-262 Page-172）
  ```

  











