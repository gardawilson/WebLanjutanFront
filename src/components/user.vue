<template>
    <div>
        <h1>Daftar user</h1>
        <input v-model="username" />
        <input v-model="password" />
        <button @click="tambah">Add</button>
        <ul>
            <li v-for="(item, index) in users" :key="item.id">{{item.username}}<button v-on:click="hapus(item.id, index)">X</button></li>
        </ul>
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
    const username = localStorage.getItem('usr')
    const password = localStorage.getItem('pwd')
      axios.get('http://localhost:3000/users', { headers: {username, password }})
        .then(result=>{
          this.users = result.data
      })
    },
    methods: {
     tambah: function(){
         const username = localStorage.getItem('usr')
         const password = localStorage.getItem('pwd')
         const newUser = {username: this.username, password: this.password}
         axios.post('http://localhost:3000/users', newUser, { headers: {username, password }})
         this.users.push(newUser)
     },
        hapus: function(id, index){
            const username = localStorage.getItem('usr')
            const password = localStorage.getItem('pwd')
            axios.delete(`http://localhost:3000/users/${id}`, { headers: {username, password }})
            this.users.splice(index,1);

        }
    }
}
</script>


