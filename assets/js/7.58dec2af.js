(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{352:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("定制及使用问题联系"),t("a",{attrs:{href:"https://t.me/leo_togo",target:"_blank",rel:"noopener noreferrer"}},[s._v("TG"),t("OutboundLink")],1)]),s._v(" "),t("Badge",{attrs:{text:"以下示例解锁DNS为4.4.4.4，实际使用以系统显示为准",type:"error",vertical:"middle"}}),s._v(" "),t("p",[s._v("有些VPS无法配置DNS或配置DNS无效请联系客服定制SOCKS5等分流版本")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("注意")]),s._v("\n部分香港CMI屏蔽了UDP 53的查询，我的落地已经开启了TCP53.直接修改VPS的DNS时请在/etc/resolv.conf文件中第一行添加")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("options use-vc\n")])])]),t("h2",{attrs:{id:"xrayr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xrayr"}},[s._v("#")]),s._v(" XrayR")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("1.首先配置 DNS 文件")])])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/XrayR/dns.json\n")])])]),t("p",[s._v("全部删除覆盖")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"servers"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.1.1.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8.8.8.8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"address"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4.4.4.4（以实际为准）"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"port"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"domains"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"geosite:netflix"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tag"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dns_inbound"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ul",[t("li",[t("strong",[s._v("2.修改 XrayR 配置文件")])])]),s._v(" "),t("p",[s._v("第 5 行去掉#号开启")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("  DnsConfigPath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("  /etc/XrayR/dns.json\n")])])]),t("p",[s._v("第 35 行附近修改参数 (如果机器带V6但是访问谷歌等异常可以将“UseIP”改为“UseIPv4”)")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v(" EnableDNS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n DNSType"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" UseIP\n")])])]),t("ul",[t("li",[t("strong",[s._v("3.重启")])])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("XrayR restart\n")])])]),t("ul",[t("li",[t("strong",[s._v("docker改全局DNS")])])]),s._v(" "),t("p",[s._v("启动时指定：")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("docker run --dns "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(" busybox"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("latest\n")])])]),t("p",[s._v("修改")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("vi /etc/docker/daemon.json \n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dns"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"填写指定dns"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("重启")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("systemctl daemon-reload\nsystemctl restart docker\n")])])]),t("h2",{attrs:{id:"soga"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#soga"}},[s._v("#")]),s._v(" SoGa")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("docker")])])]),s._v(" "),t("p",[s._v("要素")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("-e default_dns="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(" \\\n-e dns_cache_time="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \\\n-e dns_strategy=ipv4_first \\\n")])])]),t("p",[s._v("示例")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("docker run --restart=on-failure --name soga -d \\\n-v /etc/soga/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("/etc/soga/ --network host \\\n-e type=sspanel-uim \\\n-e server_type=ssr \\\n-e api=webapi \\\n-e webapi_url=https"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//api.soga.com \\")]),s._v("\n-e webapi_key=admin \\\n-e node_id="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" \\\n-e default_dns="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(" \\\n-e dns_cache_time="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \\\n-e dns_strategy=ipv4_first \\\n-e forbidden_bit_torrent="),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" \\\n-e cert_domain=image.baidu.com \\\n-e cert_mode=http \\\n-e tunnel_enable="),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" \\\n-e tunnel_proxy_protocol="),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" \\\n-e proxy_protocol="),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" \\\nvaxilu/soga\n")])])]),t("ul",[t("li",[t("strong",[s._v("脚本安装")])])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("/etc/soga/soga.conf 修改 default_dns="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v("\n")])])]),t("p",[s._v("返回官网"),t("a",{attrs:{href:"https://nfdns.top/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nfdns.top/"),t("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=n.exports}}]);