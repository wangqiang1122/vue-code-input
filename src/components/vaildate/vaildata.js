/**
 * Created by Ã÷Ï¼ on 2017/12/12.
 */
import VueCodeInput from './index.vue';

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-code-input', VueCodeInput);
};

export default VueCodeInput;