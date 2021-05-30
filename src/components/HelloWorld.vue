<template>
    <div>
        <div>TodoList</div>
        <ul>
            <li v-for="item in todos">{{item.deskripsi}}<button>X</button></li>
        </ul>
        <input v-model="myText"/>
        <button @click="tambahkan">Klik Me</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function(){
        return{
            todos:[],
            myText: ''
        }
    },
    created: function(){
      axios.get('http://localhost:3000/todo')
        .then(result=>{
          this.todos = result.data
      })
    },
    methods: {
     tambahkan: function(){
         const newItem = {deskripsi: this.myText}
         axios.post('http://localhost:3000/todo', newItem)
         this.todos.push(newItem)
     }
    }
}
</script>


