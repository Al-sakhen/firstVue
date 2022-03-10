<template>
    <div id="students">
      <h1>Students</h1>
      <ul>
        <li v-for="(student , index) in students" :key="index">
          <h3>{{student.name}}</h3>
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
    }
  // },

  // created: function(){
    // send request to server
  }
}

</script>