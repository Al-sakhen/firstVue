import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    names:[
      {name:'ahmad' , age : 23},
      {name:'osama' , age : 23},
      {name:'yazan' , age : 23},
    ],

    students:[
      {name:'sawsan' , age : 23},
      {name:'shahed' , age : 23},
      {name:'hanan' , age : 23},

    ]
  },

  getters:{
    modifiedInfo: (state)=>{
      let studentInfo = state.students.map( (student)=>{
        return{
          name: 'Student name -->  '+ student.name,
          age: 'Age:  ' + student.age,
        }
      } )
      return studentInfo
    }
  }

})