


const store = {
    state: {
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
    },

    createTodo(todo){ 
      this.state.todos.push(todo) 
    },

    actions: {
    createTodo(state, todo){
       todo._id = Math.random().toString(36).substr(2, 7)
       state.todos.push(todo) 
    }
    }

    
}

store.dispatch = function(action, payload) {
  if (!this.actions[action]) {
    throw new Error(`Action ${action} is not defined in the store`)
  }

    return this.actions[action](this.state, payload)
}





export default store