const app = Vue.createApp({
  data() {
    return {
      taskInput: "",
      taskList: [],
      showTaskList: true,
    };
  },
  methods: {
    addTask() {
      if (!this.taskInput.length > 0) {
        return;
      }
      this.taskList.push(this.taskInput);
      this.taskInput = "";
    },
    toggleShowTaskList() {
      this.showTaskList = !this.showTaskList;
    },
  },
});

app.mount("#assignment");
