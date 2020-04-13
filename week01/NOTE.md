# 前端的学习方法    （开班仪式）

## 知识体系

### 前端技能模型

- 领域知识	（实践中学习）
- 前端知识	（建立知识体系）（本栏目学习内容）
- 解决问题	（刻意练习）
  + 编程能力	-	编码难			（刷题）
  + 架构能力	-	大 -> 拆分		（读源代码）
  + 工程能力	-	人多、协作	    （与公司项目有关，不好练习）

* 读源代码
  不通读

## 学习方法	（知识的完备性）

### 整理法

- 顺序关系

- 组合关系
  父节点是某个东西，子节点描述事物的各个部分
- 维度关系
  不同角度
- 分类关系

- 案例
  + html 中的标签	
    （参考w3.org/TR/ 、whatwg.org）

### 追溯法

线索：

1. 源头
   + 最早出现的论文、杂志
   + 最初的实现案例
2. 标准和文档 （权威的资料）
   + w3.org
   + developer.mozilla.com
   + msdn.microsoft.com
   + developer.apple.com
3. 大师
   + Tim Berners-Lee
   + Brendan Eich
   + Bjame Stroustrup

- 案例
  + closure 闭包
  + 面向对象的概念
  + MVC 的案例
  + 知识体系整体案例
- Tips
  使用 Google Scholar 搜索
  	
  	

## 面试官怎么想

- 什么是好的面试题
  + 区分度、覆盖面、深度
- 面试过程
  + 打断
    * 打断意味着不感兴趣
    * 打断是一种提示	（可能你离题了）
  + 争论
    * 争论与压力面试	（管理岗可能出现）
    * 争论的技巧		   （克制情绪、保持礼貌）
  + 难题
    * 展现分析过程
    * 缩小规模
- 题目类型
  + 项目型问题
  + 知识型问题
  + 开放性问题
  + 案例性问题
  + 有趣的问题
- 面试官如何评判
  + 到位的展示自己即可
  + 问题没答出来不重要，重要的是 能够在自己的知识体系中定位到这个问题

## 作业

	追溯法：面向对象	写一篇文章


# 构建知识体系 （Week1-lesson 1）

## 脑图

## 参考资料

### 参考链接：

- 主要参考网站：

https://www.ecma-international.org/
https://developer.mozilla.org/en-US/docs/Web
https://whatwg.org/

- 课上涉及网址：

https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf
https://www.w3school.com.cn/html/html_entities.asp
https://www.w3.org/1999/xhtml/
https://html.spec.whatwg.org/multipage/
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element

### 参考文件：

- ECMA-262.pdf
- html-standard.pdf

### 参考名词：

- DTD：Document Type Definition - 文档类型定义（ https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd）
  就是顶部的<!doctype>标签。 <!DOCTYPE> 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。 在 HTML 4.01 中<!DOCTYPE> 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。 HTML5 不基于 SGML，所以不需要引用 DTD。 在 HTML 4.01 中有三种 <!DOCTYPE> 声明。在 HTML5 中只有一种：<!DOCTYPE html>
- Entity：实体（在 HTML 语境下就是 & 符后边的东西）
  HTML Entity 是一段以 “＆” 符号开头，以 “;” 符号结尾，能够表示 Unicode 符号的字符串文本。
  用途 ：
      1. 显示 HTML 保留字符，如 &lt;、&gt;、&amp;、 &#34; 等（联想到防御 XSS 攻击）；  （例子分别表示：< , > , & , "）
      2. 表示难以用常规输入设备输入的字符，如 ©、®、± 等； 
      3. 表示给定的字符编码可能无法表达文档字符集的其他字符，如 ASCII 编码想想显示中文，使用 &amp;#x6C34; 表示 “水”; 
         具体的表示方法可搜索。常用的&nbsp;（空格）也是Entity。
- ARIA：Accessible Rich Internet Applications（ https://www.w3.org/TR/html-aria/）
- Token：有效的输入元素
- Atom：原子
- Semantics：语义
- 帮助理解的资料：
  计算机组成原理
  操作系统
  编译原理（龙书）

### Tips

- $0 ： 表示当前选中的元素标签
  课程内使用：Array.prototype.map.call($0.querySelectorAll(‘code’), e => e.innerText).join(’\n’)


# 工程体系 （Week1-lesson 2）

## 职业规划

## 职业发展

	成长 -> 成就 -> 晋升 -> 成长	（循环）
	- 成就
		+ 业务性成就
			1. 业务目标
				* 理解公司业务的核心目标 KPI
				* 目标转化为指标
			2. 技术方案
				* 业务指标到技术指标的转化
				* 形成纸面方案、完成小规模试验
			3. 实时方案
				* 确定实施目标、参与人
				* 管理实施进度
			4. 结果评估
				* 数据采集、数据报表
				* 向上级汇报
		+ 技术成就
		+ 工程型成就
			1. 目标
				质量、效率
			2. 方案与实施
				* 规章制度
				* 库
				* 工具
				* 系统
			3. 结果评估
				* 线上监控

## 数据驱动的思考方式

目标 -> 现状 -> 方案 -> 实施 -> 结果

1. 分析业务目标，定数据指标
2. 采集数据，简历数据展示系统
3. 设计技术方案，预估数据
4. 小规模实验，推广全公司落地形成制度
5. 统计最终效果汇报

## 工具链

### 工具链的作用

	各工具配置使用

### 工具的分类

	- 脚手架
	- 本地调试
	- 单元测试
	- 发布

### 工具链体系的设计

	- 版本问题
	- 数据统计

## 持续集成

### 客户端软件持续集成

	- Daily build
	- BVT (build verification test)

### 前端持续集成

	- Check-in build
	- Lint + Rule Check

## 技术架构

### 客户端架构

	解决软件需求规模带来的复杂性

### 服务端架构

	解决大量用户访问带来的复杂性

### 前端架构

#### 技术架构

	- 库：有复用价值的代码
		URL		(标准在 ietf 组织)
		AJAX
		ENV
	- 组件：UI上多次出现的元素
		轮播
		Tab
	组件的定义和基础设置，就是组件化方案
	- 模块：经常被使用的业务区块
		登录


## Tips-读源代码的经验

1. 看文档
2. bugfix
3. 单步追踪	（跑起来，断点，追踪）
4. 提交作者review


