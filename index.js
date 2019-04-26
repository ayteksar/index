new Vue({
  el: "#app",
  data: {
    title: "ESPPRESSO",
    description: "Herkese Merhaba, Yukaridaki kutucuga cumlenizi giriniz"
  },
  methods: {
    ChangeTitle: function(event) {
      this.description = event.target.value;
    }
  }
});
