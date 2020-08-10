<template>
  <div class="about">
    <h1>{{pageName}}</h1>
    <h4>{{pageComponents}}</h4>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageName: "About page",
      pageComponents: "This is about page",
    };
  },
};
</script>
