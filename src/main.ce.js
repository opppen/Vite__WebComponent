import { defineCustomElement } from "vue";
import MyFirstCustomElement from './elements/MyFirstCustomElement.ce.vue'

// ====================================
// 模組定義 在 window 瀏覽器裡面
// ====================================
// 命名的部分不能使用駝峰式因為要顯示在HTML上(html的tag沒有大小寫)
window.customElements.define('my-first-custom-element', defineCustomElement(MyFirstCustomElement))
