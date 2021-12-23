const app = Vue.createApp({
  data() {
    return {
      paragraphClasses: "",
      paragraphIsVisible: true,
      selectedBg: "",
    };
  },
  methods: {
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});

app.mount("#assignment");
