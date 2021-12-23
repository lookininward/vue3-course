const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  },
  computed: {
    result() {
      const { counter } = this;
      if (counter < 37) {
        return "No there yet";
      } else if (counter === 37) {
        return counter;
      } else {
        return "Too much";
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
