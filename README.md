# javascript-learning
### Lession 1: Javascript 语法
* 4种内置对象
### Lession 2: Javascript 流程控制语句
* 4种内置对象
### Lession 3: Javascript 函数
* 4种内置对象
### Lession 4: Javascript 中的内置对象（built-in object）
* 4种内置对象
  * 1 Array 数组
  * 2 String 字符串
  * 3 Math
  * 4 Date
* Array 数组
  * 如何创建数组？ 创建数组的基本方式有两种：1 使用Array构造函数 -> 语法： new Array（3）； new Array（1，3，6，9）-> [1, 3, 6, 9]
  * 2 使用数组字面量表示法 -> let colors = [6, 'yellow', true, {email:"123@gmail.com}] ; console.log(colors) -> [6, 'yellow', true, Object]
  * 索引： array[3]; 赋值： array[3] = 'orange';
### Lession 5: 错误调试与处理
* 4种内置对象
### Lession 6: 初识Javascript中的DOM
* javascript的组成： 完整的javascript是由ECMAScript(语法), Browser Objects(DOM, BOM)(特性)组成的
* DOM 是 Document Object Model（文档对象模型）的缩写： 文档对象模型（DOM）是Html 和 XML文档的编程接口， 它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容.
  * DOM，the document object model, which represents the contents of the page. You can manipulate it using javascript.
  * The BOM (Browser Object Model) consists of the objects navigator , history , screen , location and document which are children of window.
* 基本的DOM查找方法：
  * 1 语法：document.getElementById("id"); 功能：返回对拥有指定ID的第一个对象的引用； 返回值：DOM对象； 说明：id为DOM元素上id属性的值
  * 2 语法：document.getElementsByTagName("tag"); 功能：返回一个对所有tag标签引用的集合； 返回值：数组； 说明：tag为要获取的标签名称
* 如何给元素设置样式？ javascript 也可动态给元素设置样式
  * 语法： ele.style.styleName = styleValue， eg：box.style.color = '#f00'; box.style.fontWeight = 'bold'
  * 功能： 设置ele元素的CSS样式
  * 说明： 1 ele为要设置样式的DOM对象
  * 2 styleName为要设置的样式名称
  * 3 styleValue为要设置的样式值
* innerHTML
  * 语法： ele.innerHTML
  * 功能： 返回ele元素开始和结束标签之间的HTML
  * 语法： ele.innerHTML = “html”
  * 功能： 设置ele元素开始和结束标签之间的HTML内容为html
* className
  * 语法：ele.className
  * 功能： 返回ele元素的class属性
  * 语法： ele.className = “cls”
  * 功能： 设置ele元素的class属性为cls
* 如何获取DOM元素属性或添加属性：
  * 语法：ele.getAttribute("attribute")
  * 功能： 获取ele元素的attribute属性
  * 说明：1 ele是要操作的dom对象； 2 attribute 是要获取的html属性（如：id， type）
* 设置DOM元素属性：
  * 语法：ele.setAttribute("attribute"，value)；有两个参数， 如果value是字符串，需要加引号
  * 功能：在ele元素上设置属性
  * 说明：1 ele是要操作的dom对象； 2 attribute 是要设置的html属性； 3 value为设置的attribute属性的值
* 删除DOM元素属性：
  * 语法：ele.removeAttribute("attribute")
  * 功能： 删除ele上的attribute属性
  * 说明： 1 ele是要操作的dom对象； 2 attribute 是要删除的html属性；
### Lession 7: Javascript中的DOM事件
* javascript的组成： 完整的javascript是由ECMAScript(语法), Browser Objects(DOM, BOM)(特性)组成的
### Lession 8: Javascript中的BOM基础
* javascript的组成： 完整的javascript是由ECMAScript(语法), Browser Objects(DOM, BOM)(特性)组成的
### Lession 9: Javascript中的DOM操作
* javascript的组成： 完整的javascript是由ECMAScript(语法), Browser Objects(DOM, BOM)(特性)组成的
### Lession 10: Javascript中的DOM属性
* javascript的组成： 完整的javascript是由ECMAScript(语法), Browser Objects(DOM, BOM)(特性)组成的
### Lession 11: Javascript中的事件
* javascript的组成： 完整的javascript是由ECMAScript(语法), Browser Objects(DOM, BOM)(特性)组成的
### Lession 12: 项目：Javascript实现轮播图特效
* javascript的组成： 完整的javascript是由ECMAScript(语法), Browser Objects(DOM, BOM)(特性)组成的

  

  

