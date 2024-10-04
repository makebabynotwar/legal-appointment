<template>
    <div class="editorial-post-page">
        Editorial Post Page
    </div>
</template>
  
<script>
export default {
    created(){ 
        this.$store.dispatch('title/setTitle', 'Read');
    },
}
</script>