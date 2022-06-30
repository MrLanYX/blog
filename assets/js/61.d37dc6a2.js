(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{725:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("SASS是一种CSS的开发工具，提供了许多便利的写法，大大节省了设计者的时间，使得CSS的开发，变得简单和可维护。")]),s._v(" "),a("p",[s._v("本文总结了SASS的主要用法。我的目标是，有了这篇文章，日常的一般使用就不需要去看"),a("a",{attrs:{href:"https://sass-lang.com/documentation",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v("了。")]),s._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2012/06/sass.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("SASS用法指南 - 阮一峰的网络日志"),a("OutboundLink")],1)])])]),s._v(" "),a("h2",{attrs:{id:"_1-scss的基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-scss的基本用法"}},[s._v("#")]),s._v(" 1. scss的基本用法")]),s._v(" "),a("h3",{attrs:{id:"_1-1-变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-变量"}},[s._v("#")]),s._v(" 1.1 变量")]),s._v(" "),a("p",[s._v("SASS允许使用变量，所有变量以$开头。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("blue")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #1875e7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("　\n\n　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　color "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("side")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".rounded")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("border-#")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$side"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_1-2-计算功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-计算功能"}},[s._v("#")]),s._v(" 1.2 计算功能")]),s._v(" "),a("p",[s._v("SASS允许在代码中使用算式：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　margin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("14px/2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　　　top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px + 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　　　right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $var * 10%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_1-3-嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-嵌套"}},[s._v("#")]),s._v(" 1.3 嵌套")]),s._v(" "),a("p",[s._v("SASS允许选择器嵌套。比如，下面的CSS代码：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div h1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　color "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("可以写成：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("hi")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　　　color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("属性也可以嵌套，比如border-color属性，可以写成：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("border:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　　　color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("注意，border后面必须加上冒号。")]),s._v(" "),a("p",[s._v("在嵌套的代码块内，可以使用&引用父元素。比如a:hover伪类，可以写成：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("&:hover")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #ffb3ff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_1-4-注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-注释"}},[s._v("#")]),s._v(" 1.4 注释")]),s._v(" "),a("p",[s._v("SASS共有两种注释风格。")]),s._v(" "),a("p",[s._v("标准的CSS注释 "),a("code",[s._v("/* comment */")]),s._v(" ，会保留到编译后的文件。")]),s._v(" "),a("p",[s._v("单行注释 "),a("code",[s._v("// comment")]),s._v("，只保留在SASS源文件中，编译后被省略。")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("/*")]),s._v('后面加一个感叹号，表示这是"重要注释"。即使是压缩模式编译，也会保留这行注释，通常可以用于声明版权信息。')]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*!\n　　　　重要注释！\n　　*/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_2-scss的代码的重用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-scss的代码的重用"}},[s._v("#")]),s._v(" 2. scss的代码的重用")]),s._v(" "),a("h3",{attrs:{id:"_2-1-继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-继承"}},[s._v("#")]),s._v(" 2.1 继承")]),s._v(" "),a("p",[s._v("SASS允许一个选择器，继承另一个选择器。比如，现有class1：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".class1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　border"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid #ddd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("class2要继承class1，就要使用@extend命令：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".class2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@extend")]),s._v(" .class1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n　　　　font-size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("120%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_2-2-mixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-mixin"}},[s._v("#")]),s._v(" 2.2 Mixin")]),s._v(" "),a("p",[s._v("Mixin有点像C语言的宏（macro），是可以重用的代码块。")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("@mixin")]),s._v("命令，定义一个代码块。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@mixin")]),s._v(" left")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　float"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　　　margin-left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("使用"),a("code",[s._v("@include")]),s._v("命令，调用这个mixin。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@include")]),s._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("mixin的强大之处，在于可以指定参数和缺省值。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@mixin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　float"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　　　margin-right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("使用的时候，根据需要加入参数：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("下面是一个mixin的实例，用来生成浏览器前缀。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@mixin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rounded")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("$vert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" $horz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("border-#")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$vert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("-#")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$horz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("-moz-border-radius-#")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$vert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$horz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("-webkit-border-#")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$vert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("-#")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$horz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("使用的时候，可以像下面这样调用：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#navbar li")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rounded")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#footer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rounded")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2-3-颜色函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-颜色函数"}},[s._v("#")]),s._v(" 2.3 颜色函数")]),s._v(" "),a("p",[s._v("SASS提供了一些内置的颜色函数，以便生成系列颜色。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lighten")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("#cc3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 10%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" // #d6d65c\n　　"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("darken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("#cc3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 10%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" // #a3a329\n　　"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grayscale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("#cc3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" // #808080\n　　"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("complement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("#cc3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" // #33c\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_2-4-插入文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-插入文件"}},[s._v("#")]),s._v(" 2.4 插入文件")]),s._v(" "),a("p",[s._v("@import命令，用来插入外部文件。")]),s._v(" "),a("p",[a("code",[s._v('@import "path/filename.scss";')])]),s._v(" "),a("p",[s._v("如果插入的是.css文件，则等同于css的import命令。")]),s._v(" "),a("p",[a("code",[s._v('@import "foo.css";')])]),s._v(" "),a("h2",{attrs:{id:"_3-scss的高级用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-scss的高级用法"}},[s._v("#")]),s._v(" 3. scss的高级用法")]),s._v(" "),a("h3",{attrs:{id:"_3-1-条件语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-条件语句"}},[s._v("#")]),s._v(" 3.1 条件语句")]),s._v(" "),a("p",[s._v("@if可以用来判断：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@if")]),s._v(" 1 + 1 == 2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@if")]),s._v(" 5 < 3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2px dotted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("配套的还有@else命令：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lightness")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("$color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" > 30%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　background-color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@else")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　background-color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3-2-循环语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-循环语句"}},[s._v("#")]),s._v(" 3.2 循环语句")]),s._v(" "),a("p",[s._v("SASS支持for循环：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@for")]),s._v(" $i from 1 to 10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".border-#")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("border: #")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("px solid blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("也支持while循环：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@while")]),s._v(" $i > 0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item-#")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2em * $i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n　　　　$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $i - 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("each命令，作用与for类似：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@each")]),s._v(" $member in a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".#")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　　　background-image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[s._v('"/image/#{$member}.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3-3-自定义函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-自定义函数"}},[s._v("#")]),s._v(" 3.3 自定义函数")]),s._v(" "),a("p",[s._v("SASS允许用户编写自己的函数。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("$n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@return")]),s._v(" $n * 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#sidebar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　　　width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);