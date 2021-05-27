<template>
    <div>
        <div>TodoList</div>
        <ul>
            <li v-for="item in todos">{{item.desc}}</li>
        </ul>
        <input v-model="myText"/>
        <button @click="tambahkan">Klik Me</button>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            todos:[],
            myText: ''
        }
    },
    methods: {
     tambahkan: function(){
         this.todos.push({desc: this.myText})
     }
    }
}
</script>


