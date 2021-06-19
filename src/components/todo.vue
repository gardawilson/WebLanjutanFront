<template>
    <div>
        <h1>TodoList</h1>
        <ul>
            <li v-for="(item, index) in todos" :key="item.id">{{item.deskripsi}}<button v-on:click="hapus(item.id, index)">X</button></li>
        </ul>
        <input v-model="myText"/>
        <button @click="tambah">Klik Me</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function(){
        return{
            todos:[],
            myText: '',


        }
    },
    created: function(){
    const username = localStorage.getItem('usr')
    const password = localStorage.getItem('pwd')
      axios.get('http://localhost:3000/todo', { headers: {username, password }})
        .then(result=>{
          this.todos = result.data
      })
    },
    methods: {
     tambah: function(){
        const username = localStorage.getItem('usr')
        const password = localStorage.getItem('pwd')
         const newItem = {deskripsi: this.myText}
         axios.post('http://localhost:3000/todo', newItem, { headers: {username, password }})
         this.todos.push(newItem)
     },
        hapus: function(id, index){
        const username = localStorage.getItem('usr')
        const password = localStorage.getItem('pwd')
            axios.delete(`http://localhost:3000/todo/${id}`, { headers: {username, password }})
            this.todos.splice(index,1);

        }
    }
}
</script>


