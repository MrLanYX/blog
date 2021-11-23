(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{637:function(t,r,s){"use strict";s.r(r);var a=s(3),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("服务器搭建指南第三章\n")]),t._v(" "),s("h2",{attrs:{id:"_1-u盘启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-u盘启动"}},[t._v("#")]),t._v(" "),s("strong",[t._v("1. U盘启动")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"title"}),s("p",[t._v("这一步是最为关键的一步，切忌按照步骤操作，注意警告部分")])]),s("h3",{attrs:{id:"_1-1-电脑与盒子连接在同一局域网下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-电脑与盒子连接在同一局域网下"}},[t._v("#")]),t._v(" 1.1 电脑与盒子连接在同一局域网下")]),t._v(" "),s("p",[t._v("准备好网络环境进行后续操作")]),t._v(" "),s("h3",{attrs:{id:"_1-2-盒子连接显示器开机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-盒子连接显示器开机"}},[t._v("#")]),t._v(" 1.2 盒子连接显示器开机")]),t._v(" "),s("p",[t._v("开机脸上显示器，准备键盘和鼠标，空出距离网口最近的USB口")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"title"}),s("p",[t._v("距离网口最近的USB口是用来插U盘的")]),t._v(" "),s("p",[s("strong",[t._v("但是安卓系统下无论如何都不可插入U盘，关机状态除外")])]),t._v(" "),s("p",[s("strong",[t._v("但是安卓系统下无论如何都不可插入U盘，关机状态除外")])]),t._v(" "),s("p",[s("strong",[t._v("但是安卓系统下无论如何都不可插入U盘，关机状态除外")])])]),s("h3",{attrs:{id:"_1-3-查看盒子的ip地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-查看盒子的ip地址"}},[t._v("#")]),t._v(" 1.3 查看盒子的ip地址")]),t._v(" "),s("p",[t._v("原生系统可以直接在显示器上看到ip，已经刷过电视系统的可以在设置中找到ip，实在没找到进入路由器管理查看ip")]),t._v(" "),s("h3",{attrs:{id:"_1-4-使用adb工具启动u盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-使用adb工具启动u盘"}},[t._v("#")]),t._v(" 1.4 使用adb工具启动U盘")]),t._v(" "),s("p",[t._v("社区中对于N1的adb工具有两种：")]),t._v(" "),s("ol",[s("li",[t._v("一种是原生的adb工具")]),t._v(" "),s("li",[t._v("一种是对N1盒子适配的再次封装，使用更为简单（第二种的使用方法按照提示使用即可）")])]),t._v(" "),s("p",[t._v("这两种都是一样的效果，重启盒子使其进入U盘启动")]),t._v(" "),s("p",[t._v("如果是第一种:")]),t._v(" "),s("ol",[s("li",[t._v("进入adb目录")]),t._v(" "),s("li",[t._v("在文件夹路径上敲cmd进入命令行")]),t._v(" "),s("li",[t._v("输入 "),s("code",[t._v("./adb.exe connect 斐讯IP")]),t._v(" （如失败ip后面加上"),s("code",[t._v(":5555")]),t._v("）")]),t._v(" "),s("li",[t._v("输入 "),s("code",[t._v("./adb.exe shell reboot update")]),t._v(" 盒子会进入U盘启动并且重启")])]),t._v(" "),s("p",[t._v("这里adb的使用可能会有所出入，可以参考之前其他博主的文章")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"title"}),s("p",[t._v("第一次的U盘启动不要插入U盘，可以观察显示器的信号灯或者盒子电源，大概熟悉下重启间隔，方便后续操作")]),t._v(" "),s("p",[s("strong",[t._v("一旦在安卓系统中插入U盘会将盘中系统权限更改，影响后续文件控制，所以一定要在关机后至重启中插入")])])]),s("p",[t._v("整理下来这一步的步骤总结：")]),t._v(" "),s("ul",[s("li",[t._v("电脑使用adb连接盒子")]),t._v(" "),s("li",[t._v("使用指令将盒子进入U盘启动并且重启\n+"),s("strong",[t._v("关机后")]),t._v("至"),s("strong",[t._v("重启")]),t._v("间隔中插入U盘到离网口最近的USB口")])]),t._v(" "),s("p",[t._v("这样重启会自动进入U盘中的系统")]),t._v(" "),s("p",[t._v("::: try\n没有进入系统多半是U盘不适配，只要是电脑控制的自动重启N1盒子那边多半没有问题，换其他U盘重新写入尝试（本人碰到过U盘不适配的问题）\n:::")]),t._v(" "),s("h3",{attrs:{id:"_1-5-检查系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-检查系统"}},[t._v("#")]),t._v(" 1.5 检查系统###")]),t._v(" "),s("p",[t._v("成功进入系统后默认用户：root 密码：1234")]),t._v(" "),s("p",[t._v("可能会提示重置密码，按照提示走即可")]),t._v(" "),s("p",[t._v("完全进入后查看系统文件是否被篡改权限，输入"),s("code",[t._v("ls -l /")])]),t._v(" "),s("p",[t._v("文件应该全部属于root用户，如出现1024用户代表已经被污染，关机重刷U盘，重复上述操作")]),t._v(" "),s("p",[t._v("注意U盘插入时机不要太早也不要太晚")]),t._v(" "),s("h2",{attrs:{id:"_2-系统写入emmc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-系统写入emmc"}},[t._v("#")]),t._v(" "),s("strong",[t._v("2. 系统写入eMMC")])]),t._v(" "),s("p",[t._v("等待上述操作没有问题之后就可以将系统写入盒子自带的存储中")]),t._v(" "),s("p",[t._v("输入指令 "),s("code",[t._v("nand–sata-install")])]),t._v(" "),s("p",[t._v("等待写入结果，成功后关机拔去U盘就能正常启动了")]),t._v(" "),s("h2",{attrs:{id:"_3-后续优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-后续优化"}},[t._v("#")]),t._v(" "),s("strong",[t._v("3. 后续优化")])]),t._v(" "),s("p",[t._v("系统搞定之后优化下个方面的配置")]),t._v(" "),s("h3",{attrs:{id:"_3-1-换源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-换源"}},[t._v("#")]),t._v(" 3.1 换源")]),t._v(" "),s("p",[t._v("编辑"),s("code",[t._v("/etc/apt/sources.list")]),t._v("文件更换源")]),t._v(" "),s("p",[t._v("若是 Ubuntu ，将文件内容替换成以下内容：")]),t._v(" "),s("blockquote",[s("p",[t._v("deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic main restricted universe multiverse\n#deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-security main restricted universe multiverse\n#deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-security main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-updates main restricted universe multiverse\n#deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-updates main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-backports main restricted universe multiverse\n#deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-backports main restricted universe multiverse")])]),t._v(" "),s("p",[t._v("若是 Debian，将文件内容替换成以下内容：")]),t._v(" "),s("blockquote",[s("p",[t._v("deb [ arch=arm64,armhf ] https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main contrib non-free\n#deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main contrib non-free\ndeb [ arch=arm64,armhf ] https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main contrib non-free\n#deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main contrib non-free\ndeb [ arch=arm64,armhf ] https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main contrib non-free\n#deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main contrib non-free\ndeb [ arch=arm64,armhf ] https://mirrors.tuna.tsinghua.edu.cn/debian-security/ stretch/updates main contrib non-free\n#deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security/ stretch/updates main contrib non-free\n#deb [ arch=arm64,armhf ] https://mirrors.tuna.tsinghua.edu.cn/debian/ sid main contrib non-free")])]),t._v(" "),s("p",[t._v("更新下：输入"),s("code",[t._v("apt-get update")]),t._v("和"),s("code",[t._v("apt-get upgrade")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"title"}),s("p",[s("code",[t._v("apt-get upgrade")]),t._v(" 的提示中有个选项要选择 NO")])]),s("h3",{attrs:{id:"_3-2-更新时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-更新时间"}},[t._v("#")]),t._v(" 3.2 更新时间")]),t._v(" "),s("p",[s("code",[t._v('ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" > /etc/timezone')])]),t._v(" "),s("h3",{attrs:{id:"_3-3-网络优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-网络优化"}},[t._v("#")]),t._v(" 3.3 网络优化")]),t._v(" "),s("p",[t._v("这方面按照自己的需求进行修改，可以固定，也可以自动分配，还能去除网线配置WiFi")]),t._v(" "),s("h2",{attrs:{id:"_4-总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-总结"}},[t._v("#")]),t._v(" 4. 总结")]),t._v(" "),s("p",[t._v("到此N1改服务器的步骤就全部完成了")]),t._v(" "),s("p",[t._v("剩余的按照自己无服务的要求去配置自己需要的环境")])])}),[],!1,null,null,null);r.default=e.exports}}]);