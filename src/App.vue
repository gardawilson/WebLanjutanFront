<template>
<router-link to="/">Halaman Login</router-link>
&nbsp;
<router-link to="/todo">Halaman Todo</router-link>
&nbsp;
<router-link to="/user">Halaman User</router-link>
<router-view></router-view>
</template>

<script setup>
import todo from './components/todo.vue'
import user from './components/user.vue'

</script>

