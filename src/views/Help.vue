<template>
  <div>
    <h1>{{ pageName }}</h1>
    <h4>{{ pageComponents }}</h4>
    <div class="container">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageName: "help page",
      pageComponents: "this page for helping you",
    };
  },
};
</script>
