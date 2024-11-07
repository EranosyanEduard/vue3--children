import { defineComponent } from "vue";

export default defineComponent({
  inject: {
    root$: { default: null },
  },
  provide() {
    return { root$: this };
  },
  data() {
    return { children$: new Set() };
  },
  mounted() {
    this.root$?.children$.add(this);
  },
  unmounted() {
    this.root$?.children$.delete(this);
  },
});
