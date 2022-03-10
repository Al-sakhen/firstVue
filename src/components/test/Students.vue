<template>
    <h1>Students</h1>
</template>


<script lang="ts">

export default{
  name:'Students',
  data: () => {
    return {
      students: []
    };
  },

  // get students from store
  // computed: {
  //   students: function(){
  //     return this.$store.state.students;
  //   }
  // },

  created: function(){
    // send request to server
  }
}

</script>