<template>
    <div class="editorial-list-page">
        <div class="editoral_list">

            <div class="wrapper">
                <div class="editorial_list_con">
                    <div class="editorial_header">
                        <h2>Editorials</h2>
                    </div>
                    <EditorialList :featured="false" />
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import EditorialList from '@/components/EditorialList';
export default {
    components: { EditorialList },
    created(){ 
        this.$store.dispatch('title/setTitle', 'Editorials');
    },
}
</script>