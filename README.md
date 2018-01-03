# vue-code-input
仿原生验证码自动切换效果

需要下载依赖 或者 index.vue的源码 仅适用于vue

npm i vue-code-input --save

import 引入

imprt vueCodeInput form "vue-code-input"


在注册到到组件内就可以啦

需要动态传两个参数

一个为num是输入框的个数 默认为6

.vaildateActive 为类名 切换时的动态类


vaildate 失去焦点是传递 input框内的数据
 添加一个Vshow的属性对父组件的v-show进行监听 
 Vshow 你是否有隐藏隐藏验证码需要  一般来说是布尔值 false
       

 <vueCodeInput  @vaildate="vaildate" :num="6" :Vshow="你的参数">

</vueCodeInput >
[demo](https://wangqiang1122.github.io/vue-code-input-demo/dist/#/master11)  