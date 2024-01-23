<!-- ChildComponent.vue -->

<template>
  <div class="home">
    <div class="img">
      <img class="robot" src="../assets/robot-home.png" alt="" aria-hidden="true">
    </div>
    <div class="get-started">
      <router-link to="/build"> Get started</router-link> Building your first robot!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>
<style>
.home {
  text-align: center;
}

.robot {
  height: 300px;
}
</style>
