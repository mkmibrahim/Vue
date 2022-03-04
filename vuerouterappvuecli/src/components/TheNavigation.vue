<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/netherlands">Netherlands</router-link>
  </div>
</template>
<style lang="css">
#nav .vue-active-link {
  color: white;
  border-bottom: 2px solid red;
}
</style>
