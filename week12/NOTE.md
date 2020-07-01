# Week12-lesson 1	编程与算法训练 | LL 算法（分析算法）

## 使用 LL 算法构建 AST

### 四则运算

代码：[tokenize.html](F:\testSpace\geek\Frontend-01-Template\week12\tokenize.html) 

产生式 ：背景色标注的为终结符

![](F:\test\自学-极客大学\前端训练营\images\W12L1-1-四则运算产生式.png) 

LL 算法 由小到大 往上处理 ： MultiplicativeExpression  ->  AdditiveExpression  ->  Expression

- MultiplicativeExpression  ：三种情况
- AdditiveExpression  ：五种情况 （ 第一项 MultiplicativeExpression 展开实际有三种 ）
- Expression  ：一种情况 （ 只是对 AdditiveExpression 做了一层包装，最后加上 EOF 终结，实际还是使用 AdditiveExpression ）

## Tips - 参考资料及名词解释

- LL 算法 ：移入的顺序往左，处理的顺序也是从左开始 。
- LL(1) 分析算法 ：表示从左（L）向右读入程序，使用最左（L）推导，采用一个（1）前看符号（即：只需向右看一个符号便可决定如何推导，即选择哪个产生式(规则)进行推导），就叫做 LL(1) 。LL(1) 是一个自顶向下的语法分析算法，算法的基本思想是：`表驱动的分析算法` （详细参考 ：编译原理）；
- AST ：抽象语法树

# Week12-lesson 2	编程与算法训练 | 字符串分析算法

## 字符串分析与模式匹配

- 字典树 ：大量字符串的完整模式匹配 （ 时间复杂度能接近O(n) ，是一个经济实用的 以空间换时间的数据结构）
- KMP ：长字符串中找子串 （ 时间复杂度最好的可做到 O(m + n) ）
- WildCard 通配符算法 ：KMP 的升级版，在 KMP 的基础上增加两种通配符 （ 时间复杂度也可做到 O(m + n) ）
- 正则 ：字符串通用模式匹配
- 状态机 ：通用的字符串分析
- LL  LR ：字符串多层级结构分析

## 字典树

是一个多叉树，每一层有多个节点，然后每个节点下又有多个分支构成下一层，每一层表示字符串的一位；（类似于查字典）

代码：[trie.html](F:\testSpace\geek\Frontend-01-Template\week12\trie.html)  			（ 可在控制台展开看到字典树效果 ）

## KMP

代码：[kmp.js](F:\testSpace\geek\Frontend-01-Template\week12\kmp.js)

## wildCrad

代码：[wildCrad.js](F:\testSpace\geek\Frontend-01-Template\week12\wildCrad.js)