<template>
  <div id="app">
    <header>
      <h1>Jcheez's Zi Char</h1>
    </header>
    <div>
      <ul>
        <li>
          <router-link to="/" exact>Home</router-link>
        </li>
        <li> 
          <router-link to="/orders" exact>Orders</router-link>
        </li>
        <li>
          <router-link to="/dashboard" exact>Dashboard</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script> 

  export default {
    data() {
      return {
      }
    },
    components: {
    }
  }
</script>

<style scoped>
  header {
    background-color: pink;
    color: white;
    font-size: 50px;
    text-align: center;
    padding: 20px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
