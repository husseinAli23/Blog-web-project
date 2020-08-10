import Vue from "vue";

Vue.filter("uppercase",function(v) {
    return v.toUpperCase();
  });
  
  Vue.filter("reversing",function(v) {
  return v.split("").reverse().join("");  
  })