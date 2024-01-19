<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img class="logo" src="./assets/build-a-bot-logo.png" alt="">
          Built-a-Bot
        </li>
      </ul>
    </nav>
    <button @click="onChangeUserName()">Change</button>
    <button @click="onChangedUserName()">Changed</button>
    <div>User: {{ user.userName }}</div>
  </header>
  <main>
    <RobotBuilder />
    <!-- <Search /> -->
  </main>
</template>

<script>
import RobotBuilder from './built/RobotBuilder.vue';
// import Search from './search/Search.vue';

export default {
  name: 'App',
  components: {
    RobotBuilder,
    // Search,
  },
  data() {
    return {
      user: { userName: 'Select' },
    };
  },
  methods: {
    // modification de l'attribu userName de l'objet user de la section data
    onChangeUserName() {
      this.user.userName = 'Charity';
    },
    // modification de l'objet user globalement. Cette modification n'impact que le component courant et pas les references de user dans les autres car le user injecté est celui déclaré dans la section data
    onChangedUserName() {
      this.user = { userName: 'Charities' };
    },
  },
  /* afin de reutiliser les données de la section Data, il faut considérer la section provide comme une fonction et non un objet comme définit à la ligne 40 */
  provide() {
    return {
      person: this.user,
    };
  },
  /*  provide: {
    userName: 'Salut',
  }, */

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
</style>
