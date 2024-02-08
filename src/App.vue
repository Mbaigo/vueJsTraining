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
  <div class="container">
    <aside class="aside">
      <router-view name="sidebar" />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script scoped>

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
#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
}

main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
  border-radius: 1%;
}

header {
  background-color: #ebe4e4;
  width: 1184px;
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

.nav-link {
  text-decoration: none;
  color: inherit;
}

.router-link-active {
  color: white;
}

.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}

.aside {
  padding: 30px;
  margin-right: 2px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
  border-radius: 2%;
}
</style>
