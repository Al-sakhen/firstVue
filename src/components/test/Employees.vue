<template>
    <div id="employee">
      <h1>Employees</h1>
      <ul>
        <li v-for="(employee , index) in employees" :key="index">
          <h3>{{employee.name}}</h3>
        </li>
      </ul>

    </div>
</template>


<script lang="ts">

export default{
  name:'Employees',
  computed:{
    employees(){
      return this.$store.state.names
    }
  }
}

</script>