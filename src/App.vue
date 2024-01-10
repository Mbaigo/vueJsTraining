<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img class="logo" src="./assets/build-a-bot-logo.png" alt="">
          Built a bot
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RobotBuilder />
  </main>
</template>

<script>
import RobotBuilder from './built/RobotBuilder.vue';

export default {
  name: 'App',
  components: {
    RobotBuilder,
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #595, #999);
  background-attachment: fixed;
}

header {
  background-color: #ebe4e4;
  width: 1084px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 20px;
  border-right: 1px solid #595;
}

.logo {
  vertical-align: middle;
  height: 30px;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
  border-radius: 1%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
