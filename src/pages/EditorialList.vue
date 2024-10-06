<template>
    <div class="editorial-list-page">
        <div class="editoral_list">

            <div class="wrapper">
                <div class="editorial_list_con">
                    <div class="editorial_header">
                        <h2>Editorials</h2>
                    </div>
                    <dig class="editorial_blogs">
                        <div class="editorial_blog">
                            <figure class="editorial_img">
                                <img src="@/assets/images/editorials/ai2.png"/>
                            </figure>
                            <div class="editorial_details">
                                <h3>AI + Law</h3>
                                <p><span class="date">February 4, 2024</span> <span>FAMILY, MARRIAGE</span></p>
                            </div>
                        </div>
                        <div class="editorial_blog">
                            <figure class="editorial_img">
                                <img src="@/assets/images/editorials/ai2.png"/>
                            </figure>
                            <div class="editorial_details">
                                <h3>AI + Law</h3>
                                <p><span class="date">February 4, 2024</span> <span>FAMILY, MARRIAGE</span></p>
                            </div>
                        </div>
                        <div class="editorial_blog">
                            <figure class="editorial_img">
                                <img src="@/assets/images/editorials/ai2.png"/>
                            </figure>
                            <div class="editorial_details">
                                <h3>AI + Law</h3>
                                <p><span class="date">February 4, 2024</span> <span>FAMILY, MARRIAGE</span></p>
                            </div>
                        </div>
                        <div class="editorial_blog">
                            <figure class="editorial_img">
                                <img src="@/assets/images/editorials/ai2.png"/>
                            </figure>
                            <div class="editorial_details">
                                <h3>AI + Law</h3>
                                <p><span class="date">February 4, 2024</span> <span>FAMILY, MARRIAGE</span></p>
                            </div>
                        </div>
                        <div class="editorial_blog">
                            <figure class="editorial_img">
                                <img src="@/assets/images/editorials/ai2.png"/>
                            </figure>
                            <div class="editorial_details">
                                <h3>AI + Law</h3>
                                <p><span class="date">February 4, 2024</span> <span>FAMILY, MARRIAGE</span></p>
                            </div>
                        </div>
                        <div class="editorial_blog">
                            <figure class="editorial_img">
                                <img src="@/assets/images/editorials/ai2.png"/>
                            </figure>
                            <div class="editorial_details">
                                <h3>AI + Law</h3>
                                <p><span class="date">February 4, 2024</span> <span>FAMILY, MARRIAGE</span></p>
                            </div>
                        </div>
                    </dig>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    created(){ 
        this.$store.dispatch('title/setTitle', 'Editorials');
    },
}
</script>