<template>
    <div id="students">
      <h1>Students</h1>
      <ul>
        <li v-for="(student , index) in newStudents" :key="index">
          <h3>{{student.name}} === {{student.age}} == {{student.salary}}</h3>
        </li>
      </ul>
      <button @click="addToSalary">ADD</button>
    </div>
</template>


<script lang="ts">

export default{
  name:'Students',
  // data: () => {
  //   return {
  //     students: []
  //   };
  // },

  // get students from store
  computed: {
    students():Number {
      return this.$store.state.students;
    },
    newStudents(){
      return this.$store.getters.modifiedInfo
    }

    
  },
  methods:{
    addToSalary(){
       this.$store.commit('increaseSalary')
      
    }
  }
  
  
}

</script>