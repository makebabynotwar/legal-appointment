<template>
    <div class="forgot-password-page">
        Forgot Password Page
    </div>
</template>
  
<script>
export default {
    created(){ 
        this.$store.dispatch('title/setTitle', 'Forgot Password');
    },
}
</script> 