(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{719:function(v,_,s){"use strict";s.r(_);var t=s(3),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("p",[v._v("第三篇 用vuex来解决实际问题\n")]),v._v(" "),s("h2",{attrs:{id:"_1-vuex何时使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-vuex何时使用"}},[v._v("#")]),v._v(" "),s("strong",[v._v("1. Vuex何时使用")])]),v._v(" "),s("p",[v._v("关于 Vuex 的使用情况，大多数都是：")]),v._v(" "),s("ul",[s("li",[v._v("组件之间有某个变量的交流，并且组件跨度较大")]),v._v(" "),s("li",[v._v("变量需要存储，并不因为组件销毁而丢失，下次生成依旧使用变量不覆盖")]),v._v(" "),s("li",[v._v("一个变量改变，多个组件响应")]),v._v(" "),s("li",[v._v("等较为复杂的变量使用和更改")])]),v._v(" "),s("hr"),v._v(" "),s("p",[v._v("用几个场景来说明建议使用Vuex管理状态")]),v._v(" "),s("hr"),v._v(" "),s("h3",{attrs:{id:"_1-1-vuex运用场景一-主题修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-vuex运用场景一-主题修改"}},[v._v("#")]),v._v(" 1.1 Vuex运用场景一 主题修改")]),v._v(" "),s("p",[v._v("需求：")]),v._v(" "),s("ul",[s("li",[v._v("一个系统的设置页面拥有一个主题色选择器")]),v._v(" "),s("li",[v._v("在此更改主题色将会影响\n"),s("ul",[s("li",[v._v("自身主题色选择器")]),v._v(" "),s("li",[v._v("系统的导航栏组件背景色")]),v._v(" "),s("li",[v._v("首页的背景色")]),v._v(" "),s("li",[v._v("系统内的全部按钮颜色")])])]),v._v(" "),s("li",[v._v("系统另外的设置页面有主题色重置按钮")])]),v._v(" "),s("p",[v._v("应对这种情况，如果颜色变量只是作为设置页面的data变量，在此组件销毁后导航栏组件、首页、按钮就无法取得颜色")]),v._v(" "),s("p",[v._v("若是开始路由缓存又小题大做，可以把主题色作为一个全局变量，各个组件就能够方便的读写")]),v._v(" "),s("p",[v._v("将一个变量作为全局状态管理了，就已经符合Vuex的创建需求了，这里只是将主题色作为示例，其实主题的各个属性都可以抽离出来作为一个主题模块放入 Vuex 进行管理")]),v._v(" "),s("hr"),v._v(" "),s("h3",{attrs:{id:"_1-2-vuex运用场景二-用户信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-vuex运用场景二-用户信息"}},[v._v("#")]),v._v(" 1.2 Vuex运用场景二 用户信息")]),v._v(" "),s("p",[v._v("需求：")]),v._v(" "),s("ul",[s("li",[v._v("进入系统从后台获取用户信息")]),v._v(" "),s("li",[v._v("页面上时刻显示用户头像和昵称")]),v._v(" "),s("li",[v._v("在联系页面可以给用户发送邮件")]),v._v(" "),s("li",[v._v("在更改信息页面可以修改用户昵称手机邮箱等信息，并且立即生效")])]),v._v(" "),s("p",[v._v("在进入系统后，就可以调用 Action 下的异步请求将用户信息存入Vuex的用户信息模块下")]),v._v(" "),s("p",[v._v("头像、昵称所在的组件就能够直通过 computed 属性返回需要的状态，并且在模块中可以通过 getters 设置好没有状态时返回的默认值")]),v._v(" "),s("p",[v._v("修改信息的页面，也可以直接调用 Action 中事先写好的更新方法，具体的 commit 都在Vuex中实现，简化组件代码")]),v._v(" "),s("p",[v._v("更新成功直接影响联系邮箱的页面，能够获取正确邮件并发送")]),v._v(" "),s("hr"),v._v(" "),s("p",[v._v("以上的两个场景都可以使用Vuex来进行简化管理全局状态，方便的组件的代码编写")]),v._v(" "),s("h2",{attrs:{id:"_2-vuex代码结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-vuex代码结构"}},[v._v("#")]),v._v(" "),s("strong",[v._v("2. Vuex代码结构")])]),v._v(" "),s("p",[v._v("使用Vuex需要注意以下几点：")]),v._v(" "),s("ol",[s("li",[v._v("模块最后都集中到一个store 对象中，且只能有一个store")]),v._v(" "),s("li",[v._v("mutation 方法一定是同步且是唯一的更改状态方式")]),v._v(" "),s("li",[v._v("异步都放入 action 方法")])]),v._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[v._v("└── store\n    ├── index.js          "),s("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 我们组装模块并导出 store 的地方")]),v._v("\n    ├── actions.js        "),s("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 根级别的 action")]),v._v("\n    ├── mutations.js      "),s("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 根级别的 mutation")]),v._v("\n    └── modules\n        ├── cart.js       "),s("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 购物车模块")]),v._v("\n        └── products.js   "),s("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 产品模块")]),v._v("\n")])]),v._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[v._v("1")]),s("br"),s("span",{staticClass:"line-number"},[v._v("2")]),s("br"),s("span",{staticClass:"line-number"},[v._v("3")]),s("br"),s("span",{staticClass:"line-number"},[v._v("4")]),s("br"),s("span",{staticClass:"line-number"},[v._v("5")]),s("br"),s("span",{staticClass:"line-number"},[v._v("6")]),s("br"),s("span",{staticClass:"line-number"},[v._v("7")]),s("br")])]),s("hr"),v._v(" "),s("p",[v._v("Vuex的介绍和使用就差不多了，注意合理使用，规范的使用有益于代码编写和后期维护，"),s("strong",[v._v("养成好习惯是最重要的")])])])}),[],!1,null,null,null);_.default=e.exports}}]);