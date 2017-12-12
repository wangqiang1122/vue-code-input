<template>
  <div class="hello">
    <vueCodeInput></vueCodeInput>
  </div>
</template>

<script>
   import vueCodeInput from "./vaildate/index.vue"
export default {
  name: 'HelloWorld',
  data :function() {
    return {
    }
  },
  components:{
    vueCodeInput:vueCodeInput
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
