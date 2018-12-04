<template>
  <div id="app">
    <Header/>
    <Tabs/>

    <router-view name="home"/>
    <router-view name="planets"/>
  </div>
</template>

<script>
import Tabs from "./components/Tabs/Tabs.vue";
import Header from "./components/Header/Header.vue";

export default {
  name: "App",
  components: { Tabs, Header }
};
</script>


<style lang="scss">
</style>


