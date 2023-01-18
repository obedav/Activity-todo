
import { reactive } from "vue"
import Vue from 'vue'



const store = {
    state: reactive({
      todos: [
        {
          _id: '2',
          title: 'Tundua Edu Consult',
          description: 'Activities for Today'
        },
        {
          _id: '3',
          title: 'University of People',
          description: 'Activities for Today'
        },
        {
          _id: '4',
          title: 'Web Development',
          description: 'Activities for Today'
        }
      ]
    }),

    actions: {
    createTodo(state, todo){
       todo._id = Math.random().toString(36).substr(2, 7)
       state.todos.push(todo) 
    },
    updateTodo(state, todoToUpdate) {
      const index = state.todos.findIndex((todo) => {
       
        return todo._id === todoToUpdate._id
      })

      Vue.set(state.todos, index, todoToUpdate)
    }
  }   
}

store.dispatch = function(action, payload) {
  if (!this.actions[action]) {
    throw new Error(`Action ${action} is not define in the store`)
  }

    return this.actions[action](this.state, payload)
}


export default store