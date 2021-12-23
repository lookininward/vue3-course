const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue3",
      courseGoalB: "<h2>Master Vue3 and build amazing apps</h2>",
      vueLink: "https://v3.vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
