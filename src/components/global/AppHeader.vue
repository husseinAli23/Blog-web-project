<template>
  <div class="header">
    <div class="container">
      <div class="logo">My website</div>
    <ul class="text-right">
      <router-link to="/" tag="li">
        <a>Home</a>
      </router-link>
      <router-link to="/Blog" tag="li">
        <a>Blog</a>
      </router-link>
      <router-link to="/About" tag="li">
        <a>About</a>
      </router-link>
      <router-link to="/Help" tag="li">
        <a>Help</a>
      </router-link>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
  background: #333;
  color: #fff;
  overflow: hidden;

  .logo {
    width: 200px;
    float: left;
    padding: 15px;
    font-size: 24px;
  }
  ul {
    float: left;
    width: 50%;
    height: 50%;
    margin: 0;
    li {
      padding: 20px;
      display: inline-block;
      font-size: 18px;

      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
}
</style>
