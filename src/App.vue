<template>
  <div id="app">
  <div class="container">
    <nav>
        <router-link class="link" to="/">Home</router-link>

        <router-link class="link" to="/students">Students</router-link>
        <router-link class="link" to="/employees">Employees</router-link>
      </nav>
      <router-view/> 
  </div>
    
  </div>
</template>

<style>
@import '@/assets/base.css';
nav{
  width: 100%;
  padding:  20px 0px ;
  background: rgb(224, 192, 121);
  border-radius:  15px 0 15px 0;

}
nav .link{
margin-right: 15px;
margin-left: 10px;
color: rgb(204, 78, 78);
font-weight: 500;
font-size: 20px;
text-decoration: none;
transition: .4s;
}
nav .link:hover{
  color: rgba(231, 38, 38, 0.815);
}
.container{
  width: 80%;
  margin: auto;
}

</style>

<script lang="ts">
  import Students from './components/test/Students.vue'
  export default{
    components:{
      Students,
    }
  }
</script>

