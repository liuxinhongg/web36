<template>
  <div id="app">
    <img src="./assets/logo.png">
     <a href="/">首页</a>
     <a href="/first">工作</a>
     <router-link to='/' exact>首页home</router-link>
     <router-link to='/first' active-class="work">工作work</router-link>
     <router-link to='/page'>页面page</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  background:red;
}
.work{
  background:blue;
}
.nav{
  font-size:30px;
  background:aqua;
}
</style>
