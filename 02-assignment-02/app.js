const app = Vue.createApp({
  data() {
    return { userInput: "" };
  },
  methods: {
    showAlert: () => alert("showAlert"),
    setUserInput(event) {
      this.userInput = event.target.value;
    },
  },
});

app.mount("#assignment");
