<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <TodoList :todos="todos"/>
        <div class="todo-create-btn-container">
        <todo-create @formSubmitted="createTodo" />
        </div>
      </div>
     </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoCreate from '@/components/TodoCreate.vue'



export default {
  name: 'App',
  components: {
    TodoList, TodoCreate
  },
  data() {
    return {  
      todos: [
        {
          _id: '1',
          title: 'EduCo Global',
          description: 'Activities for Today'
        },
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
        },
        {
          _id: '5',
          title: 'Family',
          description: 'Activities for Today'
        },
        {
          _id: '6',
          title: 'Naocett Academics Services',
          description: 'Activities for Today'
        }
      ]
    }
  },
  methods: {
    createTodo(todo){ 
      this.todos.push(todo) 
    }
  }

}




</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.app-error {
  color: #ff1212;
}

.app-form { 
  .label { 
    display: block; 
    font-size: 18px; 
    font-weight: bold; 
    }
  .form-input { 
    padding: 10px; 
    font-size: 17px; 
    } 
    .form-control { 
      margin-bottom:10px;
      
      &-last {
        margin-bottom: 0;
      }
      } 
    }


.is-primary { 
  background-color: #47ca47 !important; 
  }
.is-warning { 
  background-color: #ffa753 !important; 
  }
.is-danger { 
  background-color: #ff5a5a !important; 
  }


.app-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: #fff;
  font-weight: bold;

  &:hover { 
    cursor: pointer; 
    }

}



.todo {
  &-wrapper{
    display: flex; 
    justify-content: center; 
    width: 100%;
  
  }

  &-create-btn-container {
    margin: 10px;
  }

  &-container {
    display: flex;
    flex-direction: column;
    width: 400px; 
    height: auto; 
    background-color: #ededed;
    border-radius: 10px;
  }


}

</style>
