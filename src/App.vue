<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }">
            <img class="logo" src="./assets/build-a-bot-logo.png" alt="">
            Built-a-Bot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Build' }">
            Build
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #595, #999);
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

<style scoped>
/* .content>>>.robot-name {
  color: red;
  border: 2px solid;
} */

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

.nav-link {
  text-decoration: none;
  color: inherit;
}

.router-link-active {
  color: white;
}
</style>
