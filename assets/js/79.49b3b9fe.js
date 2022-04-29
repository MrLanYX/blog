(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{743:function(t,a,_){"use strict";_.r(a);var s=_(3),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("Vue中的watch与computed差异和应用环境\n")]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"_1-watch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-watch"}},[t._v("#")]),t._v(" "),_("strong",[t._v("1. watch")])]),t._v(" "),_("p",[t._v("watch主要用于监控vue实例的变化，它监控的变量当然必须在data里面声明才可以，它可以监控一个变量，也可以是一个对象。")]),t._v(" "),_("div",{staticClass:"custom-block danger"},[_("p",{staticClass:"title"}),_("p",[t._v("必须是data中已经存在的变量")])]),_("p",[t._v("监听到目标的变化返回旧值和新值，自由对其进行下一步的处理")]),t._v(" "),_("div",{staticClass:"custom-block danger"},[_("p",{staticClass:"title"}),_("p",[t._v("尽量不要在对自身的监听中对自身赋值，这样会多次触发监听，导致各种各样的问题")])]),_("h2",{attrs:{id:"_2-computed"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-computed"}},[t._v("#")]),t._v(" "),_("strong",[t._v("2. computed")])]),t._v(" "),_("p",[t._v("computed不需要在data中声明，能够直接在computed中定义，生命出来的变量与data中的数据拥有差不多的功能，一样使用，一样拥有watch监听能力。")]),t._v(" "),_("p",[t._v("差异：")]),t._v(" "),_("ul",[_("li",[t._v("不能直接赋值，computed中声明的变量值是其return的返回值")]),t._v(" "),_("li",[t._v("computed中的声明途中对于data中数据的使用，只要其使用的data中的值变化就会触发computed中他的更新，这也就是取名为计算的原因")])]),t._v(" "),_("h2",{attrs:{id:"_3-运用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-运用"}},[t._v("#")]),t._v(" 3. 运用")]),t._v(" "),_("p",[t._v("举个简单例子：")]),t._v(" "),_("ol",[_("li",[t._v("有个商品data中声明了其单价和数量")]),t._v(" "),_("li",[t._v("computed中声明了个总价返回值是单价乘数量\n当单价和数量任何一个改变时")])]),t._v(" "),_("p",[t._v("computed中的总计就会立马更新")]),t._v(" "),_("p",[t._v("watch也可以对总价进行监听到达某个值的时候使用优惠卷")])])}),[],!1,null,null,null);a.default=e.exports}}]);