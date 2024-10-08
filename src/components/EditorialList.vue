<template>
    <div class="editorial_blogs">
        <div @click="gotoEditorial(editorial.id)" class="editorial_blog" v-for="editorial in modifiedEditorials" :key="editorial.id">
            <figure class="editorial_img">
                <img src="@/assets/images/editorials/ai2.png"/>
            </figure>
            <div class="editorial_details">
                <h3>{{ editorial.name }}</h3>
                <p><span class="date">{{ editorial.date_created }}</span> <span>{{ editorial.tags.join(', ') }}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        featured: {
            type: Boolean,
            required: true,
        }
    },
    computed: {
        modifiedEditorials(){
            return this.editorials.filter((editorial, index) => {
                if (this.featured) {
                    if (index <= 2 )
                        return editorial    
                }
                else if (!this.featured)
                    return editorial
            })
        }
    },
    data() {
        return {
            editorials: [
                {
                    id: 1,
                    name: 'AI + Law',
                    image: 'ai2.png',
                    date_created: 'February 4, 2024',
                    tags: ['FAMILY', 'MARRIAGE']
                },
                {
                    id: 2,
                    name: 'AI + Law',
                    image: 'ai2.png',
                    date_created: 'February 4, 2024',
                    tags: ['FAMILY', 'MARRIAGE']
                },
                {
                    id: 3,
                    name: 'AI + Law',
                    image: 'ai2.png',
                    date_created: 'February 4, 2024',
                    tags: ['FAMILY', 'MARRIAGE']
                },
                {
                    id: 4,
                    name: 'AI + Law',
                    image: 'ai2.png',
                    date_created: 'February 4, 2024',
                    tags: ['FAMILY', 'MARRIAGE']
                },
                {
                    id: 5,
                    name: 'AI + Law',
                    image: 'ai2.png',
                    date_created: 'February 4, 2024',
                    tags: ['FAMILY', 'MARRIAGE']
                },
                {
                    id: 6,
                    name: 'AI + Law',
                    image: 'ai2.png',
                    date_created: 'February 4, 2024',
                    tags: ['FAMILY', 'MARRIAGE']
                },
            ]
        }
    },
    methods: {
        gotoEditorial(id) {
            this.$router.push({ name: 'editorial-post', params: { id: id }})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>