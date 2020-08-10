<template>
  <div class="outBlog">
    <h1>{{ pageName }}</h1>
    <input
      type="text"
      class="col-md-4 searchbox"
      v-model="search"
      placeholder="search box"
    />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="posts-area">
            <BlogPost
              v-for="post in filterBlogs"
              :key="post.id"
              :views="post.views"
              :date="post.date"
              :title="post.title"
              :contant="post.contant"
              :category="post.category"
              :auther="post.auther"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/blog/BlogPosts.vue";

import posts_data from "../json/posts_data.json";

export default {
  data: function() {
    return {
      pageName: "Blog page",
      posts: posts_data,
      search: "",
    };
  },
  name: "Blog",
  components: {
    BlogPost,

  },
  computed: {
    filterBlogs: function() {
      return this.posts.filter((BlogPost) => {
        return BlogPost.title.match(this.search);
      });
    },
  },
};
</script>
<style lang="scss">
.searchbox {
  color: black;
margin: 15px;
margin-bottom: 30px;
}
</style>
