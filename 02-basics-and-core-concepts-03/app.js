const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullName: "",
      lastName: "",
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
  computed: {
    fullName() {
      console.log("fuck");
      if (this.name === "") {
        return "";
      }
      return `${this.name} ${this.lastName}`;
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    //   name(value) {
    //     if (this.name === "") {
    //       this.fullName = "";
    //     } else {
    //       this.fullName = `${value} ${this.lastName}`;
    //     }
    //   },

    //   lastName(value) {
    //     if (this.name === "") {
    //       this.fullName = "";
    //     } else {
    //       this.fullName = `${this.name} ${value}`;
    //     }
    //   },
  },
});

app.mount("#events");
