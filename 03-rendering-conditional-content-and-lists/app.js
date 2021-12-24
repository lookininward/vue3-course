const app = Vue.createApp({
  data() {
    return { goalInput: "", goals: [] };
  },
  methods: {
    addGoal() {
      if (!this.goalInput.length > 0) {
        return;
      }
      this.goals.push(this.goalInput);
      this.goalInput = "";
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
