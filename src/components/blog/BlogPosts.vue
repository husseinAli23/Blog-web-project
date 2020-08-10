<template>
  <div class="post-box">
    <span class="post-views">{{ views }}</span>
    <h3 class="post-title">{{ title }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-contant">{{ contant | shorten(150, " ...") }}</p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-auther">{{ auther }}</span>
      </div>

      <div class="col-sm-6 text-right ">
        <span class="post-categor">{{ category | uppercase }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPosts",

  props: ["views", "auther", "title", "category", "contant", "date"],
  filters: {
    shorten: function(v, textLength, suffix) {
      return v.substring(0, textLength) + suffix;
    },
  },
};
</script>

<style lang="scss">
.post-box {
  padding: 20px;
  background-color: #f5f5f5;
  position: relative;
  text-align: left;
  margin-bottom: 20px;
  .post-views {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #616161;
    border-radius: 4px;
    padding: 1px 5px;
    text-align: center;
    color: #fff;
    font-weight: bold;
  }
  .post-title {
    color: #000;
    font-weight: bold;
  }
  .post-date {
    color: #888;
    display: block;
    padding: 0 0 10px 5px;
    font-size: 12px;
  }
  .post-contant {
    line-height: 1.8;
    color: #666;
  }
  .post-auther {
    background-color: #bdbdbd;
    padding: 5px 10px;
    border-radius: 4px;
    color: white;
  }
  .post-categor {
    background-color: #bdbdbd;
    padding: 5px 10px;
    border-radius: 4px;
    color: white;
  }
}
</style>
