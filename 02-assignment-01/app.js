const app = Vue.createApp({
  data() {
    return {
      name: "Michael",
      age: 31,
      imgURL:
        "https://images.pexels.com/photos/10325738/pexels-photo-10325738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    };
  },
  methods: {
    getFavouriteNumber: () => Math.random(),
  },
});

app.mount("#assignment");
