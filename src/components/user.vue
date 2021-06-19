<template>
    <div>
        <h1>Daftar user</h1>
        <input v-model="username" />
        <input v-model="password" />
        <button @click="tambah">Add</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function(){
        return{
            users:[],
            username: '',
            password: ''
        }
    },
    created: function(){
      axios.get('http://localhost:3000/users')
        .then(result=>{
          this.users = result.data
      })
    },
    methods: {
     tambah: function(){
         const newItem = {username: this.username, password: this.password}
         axios.post('http://localhost:3000/todo', newUser)
         this.todos.push(newUser)
     },
        hapus: function(id, index){
            axios.delete(`http://localhost:3000/todo/${id}`)
            this.todos.splice(index,1);

        }
    }
}
</script>


