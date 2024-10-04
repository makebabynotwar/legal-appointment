<template>
    <div class="registration-page">
        Registration Page
    </div>
</template>
  
<script>
export default {
    created(){
        this.$store.dispatch('title/setTitle', 'Register');
    },
}
</script>