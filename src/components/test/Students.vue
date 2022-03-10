<template>
    <div id="students">
      <h1>Students</h1>
      <ul>
        <li v-for="(student , index) in newStudents" :key="index">
          <h3>{{student.name}} === {{student.age}}</h3>
        </li>
      </ul>
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
    students(){
      return this.$store.state.students;
    },
    newStudents(){
      return this.$store.getters.modifiedInfo
    }

    
  },
  
  
}

</script>