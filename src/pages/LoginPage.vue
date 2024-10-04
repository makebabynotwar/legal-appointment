<template>
    <div class="login-page">
        Login Page
    </div>
</template>
  
<script>
export default {
    created(){ 
        this.$store.dispatch('title/setTitle', 'Login');
    },
}
</script>