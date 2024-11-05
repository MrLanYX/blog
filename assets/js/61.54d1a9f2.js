(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{724:function(n,s,e){"use strict";e.r(s);var t=e(3),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("一台服务器开启了nginx的一个server服务（例如：80、443），但是需要多个域名进入走向不同的前端")]),n._v(" "),e("p",[e("strong",[n._v("假设文件路径结构：")])]),n._v(" "),e("ul",[e("li",[e("code",[n._v("/home/www/imlyx.top")])]),n._v(" "),e("li",[e("code",[n._v("/home/www/www.imlyx.top")])]),n._v(" "),e("li",[e("code",[n._v("/home/www/blog.imlyx.top")])])]),n._v(" "),e("p",[e("strong",[n._v("nginx配置")])]),n._v(" "),e("p",[n._v("利用正则来匹配文件路径")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("server {\n    listen       80 default_server;\n    # $1 = '' || 'www.' || 'blog.' ; $3 = 'imlyx.top'\n    server_name  ~* (\\w+\\.)?(imlyx\\.top)$; \n\n    root /home/www/$1$3\n    \n    location / {\n        try_files $uri $uri/ /index.html;\n        index index.html;\n    }\n\n    # include ./img-cache.conf\n\n    # error_page 404 /404.html;\n\n    # error_page 500 502 503 504 /50x.html;\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);