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
* 学习目标：
  * 1 掌握什么是事件： 事件就是文档或浏览器窗口中发生的一些特定的交互瞬间
  * 2 掌握HTML事件 (这是第一种绑定事件的方法）
  * 3 掌握DOM 0级事件  (这是第二种绑定事件的方法）
  * 4 掌握常用的鼠标与键盘事件
  * 5 掌握this的指向
* HTML事件：直接在HTML元素标签内添加事件，执行脚本
  * 语法： <tag 事件= “执行脚本” ></tag>
  * 功能： 在HTML元素上绑定事件
  * 说明： 执行脚本可以是一个函数的调用
* 鼠标事件：
  * onload: 页面加载时触发， 作用在window对象上的
  * unload: 页面卸载时触发， 作用在window对象上的
  * onclick： 鼠标点击时触发
  * onmouseover： 鼠标滑过时触发
  * onmouseout： 鼠标离开时触发
  * onfoucs： 获得焦点时触发, 用于 1 input标签type为text，password； 2 textarea标签
  * onblur： 失去焦点时触发
  * onchange: 域的内容改变时发生
* 关于this指向：
  * 在事件触发的函数中，this是对该DOM对象的引用
* DOM 0级事件
  * 1 通过DOM获取HTML元素
  * 2 （获取HTML元素).事件 = 执行脚本
* 不建议使用HTML事件原因：
  * 1 多元素绑定相同事件时，效率低
  * 2 不建议在HTML元素中写javascript代码
  
### Lession 8: Javascript中的BOM基础
* 什么是BOM？-> BOM（browser object model）浏览器对象模型
* BOM对象有：window， navigator，screen， history， location， document， event
* BOM核心对象：window
  * window是浏览器的一个实例， 在浏览器中， window对象有双重角色，它既是通过javascript访问浏览器窗口的一个接口，又是ECMAScript规定的Global对象. Global对象 -> 全局对象
  * 所有的全局变量和全局方法都被归在window上
* window对象的方法：
  * 1 语法： window.alert("content")
  * 功能：显示带有一段消息和一个确认按钮的警告框
  * 2 语法： window.confirm("message")
  * 功能：显示一个带有指定消息和ok及取消按钮的对话框
  * 返回值：如果用户点击确认按钮，则confirm（）返回true；如果用户点击取消按钮，则confirm（）返回false；
  * 3 语法： window.prompt("text, defaultText")
  * 参数说明： text：要在对话框中显示的纯文本（而不是HTML格式的文本）； defaultText：默认的输入文本
  * 返回值：如果用户单击提示框的取消按钮，则返回null； 如果用户单击提示框的确认按钮，则返回输入字段当前显示的文本； 
  * 4 语法：window.open(pageURL, name, parameters)
  * 功能：打开一个新的浏览器窗口或查找一个已命名的窗口
  * 参数说明： pageURL：子窗口路径； name：子窗口句柄（name声明了新窗口的名称，方便后期通过name对子窗口进行引用）； parameters： 窗口参数（各参数用逗号分隔）
  * 5 语法： window.close()
  * 功能： 关闭浏览器窗口
  * 6 定时器： 超时调用
  * 语法：setTimeout(code, millisec)
  * 功能：在指定的毫秒数后调用函数或计算表达式
  * 参数说明： code： 要调用的函数或要执行的javascript代码串； millisec：在执行代码前需等待的毫秒数
  * 说明： setTimeout（）只执行code一次。如果要多次调用，可以让code自身再次调用setTimeout（）；
  * 7 定时器： 清除超时调用
  * 语法： clearTimeout(id_of_settimeout)
  * 功能：取消由setTimeout（）方法设置的timeout
  * 参数说明： id_of_settimeout： 由setTimeout（）返回的id值， 该值标识要取消的延迟执行代码块
  * 8 定时器： 间歇调用
  * 语法：setInterval(code, millisec)
  * 功能：每隔指定的时间执行一次代码
  * 参数说明： code： 要调用的函数或要执行的javascript代码串； millisec：周期性执行或调用code之间的时间间隔，在执行代码前需等待的毫秒数
  * 9  定时器： 清除间歇调用
  * 语法： clearInterval(id_of_setinterval)
  * 功能：取消由setInterval（）方法设置的interval
  * 参数说明： id_of_setinterval： 由setInterval（）返回的id值
* location 对象：
  * location对象提供了与当前窗口中加载的文档有关的信息， 还提供了一些导航的功能， 它既是window对象的属性， 也是document对象的属性
  * 语法： location.href
  * 功能： 返回当前加载页面的完整URL
  * 说明： location.href与window.location.href等价
  * 语法： location.hash
  * 功能：返回URL中的hash（#号后跟零或多个字符）， 如果不包含则返回空字符串
  
### Lession 9: Javascript中的DOM操作
* javascript的组成： 完整的javascript是由ECMAScript(语法), Browser Objects(DOM, BOM)(特性)组成的
### Lession 10: Javascript中的DOM属性
* javascript的组成： 完整的javascript是由ECMAScript(语法), Browser Objects(DOM, BOM)(特性)组成的
### Lession 11: Javascript中的事件
* javascript的组成： 完整的javascript是由ECMAScript(语法), Browser Objects(DOM, BOM)(特性)组成的
### Lession 12: 项目：Javascript实现轮播图特效
* javascript的组成： 完整的javascript是由ECMAScript(语法), Browser Objects(DOM, BOM)(特性)组成的

  

  

