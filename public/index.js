/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Simple Search",
      newPlace: "",
      results: []
    };
  },
  created: function() {},
  methods: {
    searchPlace: function() {
      console.log("searching for a place");
      var newPlace = this.newPlace;
      axios.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyA8A_XC0i0ZsFIdd_j0DiC0fi8rRnioawY&input=" +newPlace + "&inputtype=textquery&fields=name,formatted_address,place_id").then(function(response) {
        this.results = response.data;
        console.log(response.data);
      }.bind(this));
    },
    addToTrip: function(inputCandidate) {
      console.log("adding to trip");

    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});