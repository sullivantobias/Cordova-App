<template>
  <div id="app">
    <Thumbnail/>
    <router-view/>
  </div>
</template>

<script>
import Thumbnail from "./components/Thumbnail/Thumbnail.vue";

export default {
  name: "App",
  components: { Thumbnail }
};
</script>


