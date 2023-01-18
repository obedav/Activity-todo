

<template>
            <div v-if="!editMode" class="todo-item"> 
              <div class="todo-item-content">
                <div class="todo-item-content-title">
                   {{title}}
                </div>
                <div class="todo-item-content-description">
                   {{description}}
                </div>
              </div>
                <button
                  @click="editMode = true" 
                  class="app-button is-warning">Edit
                  </button>
                  <button
                  @click="deleteTodo" 
                  class="app-button is-danger">Delete
                  </button>
            </div>
            <div v-else class="todo-item edit-form">
                <form class="app-form">
                <div class="form-control">
                    <label class="label">Title</label>
                    <input
                    v-model="todo.title"
                    class="form-input" 
                    type="text">
                </div>  
                <div class="form-control form-control-last">
                    <label class="label">Description</label>
                    <textarea
                    v-model="todo.description"  
                    cols="30"
                    rows="5"
                    class="form-input" >      
                    </textarea>
                </div> 
                <button
                  @click.prevent="editTodo" 
                  class="app-button is-warning">Update
                  </button>
                  <button
                  @click.prevent="editMode = false" 
                  class="app-button is-danger">Cancel
                  </button>
                </form>
            </div>
</template>


<script>
import store from '@/store'

export default {
   // props: ['title', 'description']
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false,
            default: 'Default Description'
        },
        _id: {
          type: String,
          required: true
        }
    },
    data() {
      return {
        editMode: false,
        todo: {
          _id: this._id,
          title: this.title,
          description: this.description
        }
      }
    },
    methods: {
      editTodo() {
        store.dispatch('updateTodo', {...this.todo})
        this.editMode = false
      },
      deleteTodo() {
        alert('deleting todo!')
      }
    } 
}

</script>



<style scoped lang="scss">



.app-button {
  font-size: 10px;
  &.is-warning {
    margin-right: 5px;
  }
}
.todo {

  &-item {
    background-color: gray;
    height: auto;
    margin: 10px;
    padding: 10px;
    color: #fff;
    border-radius: 5px;
    font-size: 23px;

    &-content {
      margin-bottom: 10px;
      &-title {
        font-weight: bold;
      }

      &-description {
        font-size: 19px;
      }
    }
  }
}
</style>
