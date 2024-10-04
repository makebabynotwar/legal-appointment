<template>
    <div class="reviews-page">
        Reviews Page
    </div>
</template>
  
<script>
export default {
    created(){ 
        this.$store.dispatch('title/setTitle', 'Reviews');
    },
}
</script>