<template>
    <div class="contact-us-page">
        Contact Us Page
    </div>
</template>
  
<script>
export default {
    created(){
        this.$store.dispatch('title/setTitle', 'Contact Us');
    },
}
</script>