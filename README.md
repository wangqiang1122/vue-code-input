# vue-code-input
仿原生验证码自动切换效果

暂时在NPM，没有上传成功
要用的话可以复制vaildate文件里的index.vue文件
需要下载依赖
npm i vue-code-input --save

import 引入

imprt vueCodeInput form "vue-code-input"


在注册到到组件内就可以啦

需要动态传两个参数

一个为num是输入框的个数 默认为6

.vaildateActive 为类名 切换时的动态类

vaildate 失去焦点是传递 input框内的数据

写法
 <vueCodeInput  @vaildate="vaildate" :num="6" >

</vueCodeInput >
