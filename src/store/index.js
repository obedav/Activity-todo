
import { reactive } from "vue"

const INITIAL_DATA = {
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
}


const store = {
    state: reactive({
        todos: []
    }),

    actions: {
    initStore(state) {
      const todos = localStorage.getItem('my_todos')

      if (!todos) {
        //Vue.set(state, 'todos', INITIAL_DATA.todos)
       state.todos = INITIAL_DATA.todos
      } else {
        //state.todos = INITIAL_DATA.todos
        state.todos = JSON.parse(todos)
      }

      return state.todos
    },

    createTodo(state, todo){
       todo._id = Math.random().toString(36).substr(2, 7)
       state.todos.push(todo) 
//////////
      return state.todos
    },
    updateTodo(state, todoToUpdate) {
      const index = state.todos.findIndex((todo) => {
        return todo._id === todoToUpdate._id
      })
      state.todos[index] = todoToUpdate
      return state.todos
    },
    deleteTodo(state, todoId) {
      const index = state.todos.findIndex((todo) => {
        return todo._id === todoId
      })

      state.todos.splice(index, 1)
       return state.todos
    }
  }   
}
////////////////////////
function persistData(value) {
  const stringifiedValue = JSON.stringify(value)
        localStorage.setItem('my_todos', stringifiedValue)
}

store.dispatch = function(action, payload) {
  if (!this.actions[action]) {
    throw new Error(`Action ${action} is not define in the store`)
  }

    const result = this.actions[action](this.state, payload)

    if (!result) return

      persistData(result)
      return result
}


export default store