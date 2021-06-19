<template>
    <div>
        <h1>Login</h1>
        <div>
        <label>Username</label>
        <input type="text" v-model="username" />
        </div>
        <div>
        <label>Password</label>
        <input type="password" v-model="password" />
        <div>
        <button @click="login">Login</button>
        <button @click="logout">Logout</button>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    data: function(){
        return{
            username: '',
            password: ''
        }
    },
        created: function(){
            this.username = localStorage.getItem('usr')
            this.password = localStorage.getItem('pwd')
        },
    methods: {
    login: function(){
         localStorage.setItem('usr', this.username)
         localStorage.setItem('pwd', this.password)
        },
    logout: function(){
        localStorage.removeItem('usr')
        localStorage.removeItem('pwd')
        this.username = ''
        this.password = ''
        }
    }
}
</script>


