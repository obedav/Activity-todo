

<template>
    <ModalTodo ref="ModalTodo">
        <form class="app-form">
            <div class="form-control">
                <label class="label">Title</label>
                <input
                v-model="form.title"  
                class="form-input" 
                type="text">
            </div>  
            <div class="form-control form-control-last">
                <label class="label">Description</label>
                <textarea 
                v-model="form.description" 
                cols="30"
                rows="5"
                class="form-input" >      
                </textarea>
            </div>
            <div class="app-error">
                <div class="form-error">
                    {{formError}}
                </div>
            </div>  
            <button
            @click="submitForm" 
            type="button" 
            class="app-button is-primary">Confirm</button>
        </form>
    </ModalTodo>
</template>


<script>
import ModalTodo from '@/components/ModalTodo.vue'
export default {
    components: {
        ModalTodo
    },
  data() { 
    return { 
        form: { 
            title: '', 
            description: '' 
            },
        formError: ''
        } 
    },
computed: {
    isformValid() {
        return this.form.title.length > 8 && 
        this.form.description.length > 10 ? true : false
    },
    ModalTodo() {
        return this.$refs.ModalTodo
    }
},    
methods: { 
    submitForm() { 
        if (this.isformValid) {
            this.formError = ''
            this.$emit('formSubmitted', {...this.form})
            this.ModalTodo.close()         
            this.resetForm()
        } else {
           this.formError = 'Error! Title needs to be longer than 8 characters and description longer than 10 characters!' 
        }
    },
    resetForm() {
        this.form.title = ''
        this.form.description = ''
        }
    }
}
</script>
<style scoped>
    .form-error {
        margin: 0 0 10px 0;
        margin-bottom: 10px;
    }
</style>