<template>
    <div>
        <div>TodoList</div>
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
      axios.get('http://localhost:3000/todo')
        .then(result=>{
          this.todos = result.data
      })
    },
    methods: {
     tambah: function(){
         const newItem = {deskripsi: this.myText}
         axios.post('http://localhost:3000/todo', newItem)
         this.todos.push(newItem)
     },
        hapus: function(id, index){
            axios.delete(`http://localhost:3000/todo/${id}`)
            this.todos.splice(index,1);

        }
    }
}
</script>


