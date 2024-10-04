<template>
    <div class="editorial-list-page">
        Editorial List Page
    </div>
</template>
  
<script>
export default {
    created(){ 
        this.$store.dispatch('title/setTitle', 'Editorials');
    },
}
</script>