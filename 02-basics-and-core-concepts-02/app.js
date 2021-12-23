const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(numToAdd) {
      this.counter += numToAdd;
    },
    remove(numToRemove) {
      this.counter -= numToRemove;
    },
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
    },
    submitForm() {
      alert("submitForm");
    },
    confirmNameInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
