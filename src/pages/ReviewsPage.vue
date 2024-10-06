<template>
    <div class="reviews-page">
        <div class="reviews_area">
            <div class="wrapper">
                <div class="reviews_con">

                    <div class="reviews_intro">
                        <h2>PHILIPPINES’ MOST <br/>RATED LAW FIRM</h2>
                    </div>

               
                    <img class="reviews_google" src="@/assets/images/google-reviews.png"/>

                    <div class="reviews_intro2">
                        <h3>Inspiring The Most <br/>
                            Confidence</h3>
                        <h4>"At DEGAMO LAW FIRM, <br/>
                            we pride ourselves on delivering top-tier legal services that consistently exceed our clients' expectations. Our unwavering dedication to your success is reflected in every case we handle, ensuring that you receive the highest level of representation."</h4>
                    </div>

                    <div class="reviews_boxes">
                        <div class="reviews_box">
                            <h2>Client Satisfaction is Our Priority</h2>
                            <p>Our clients' satisfaction is paramount. With a track
                                record of successful outcomes and numerous 
                                glowing testimonials, we have established
                                ourselves as a trusted partner in the legal
                                community. Your peace of mind and 
                                confidence in our services are our greatest rewards.</p>
                        </div>
                        <div class="reviews_box">
                            <h2>Consistent High Ratings Across All Platforms</h2>
                            <p>Our reputation speaks for itself. We have earned 
                                consistently high ratings across multiple review 
                                platforms, a testament to our relentless pursuit 
                                of excellence. Our clients' feedback highlights
                                our professionalism, diligence, and the positive
                                impact we have on their lives.</p>
                        </div>
                        <div class="reviews_box">
                            <h2>Building Strong Client Relationships</h2>
                            <p>We believe in building strong, lasting relationships
                                with our clients. By taking the time to understand
                                your unique needs and circumstances, we provide
                                tailored legal solutions that are both effective and
                                compassionate. Your trust is the cornerstone of 
                                our practice.</p>
                        </div>
                        <div class="reviews_box">
                            <h2>Real Stories, Real Success</h2>
                            <p>Our clients' success stories are a testament to 
                                our dedication and expertise. From complex 
                                litigation to everyday legal matters, we are
                                proud to have made a significant difference
                                in the lives of those we represent.</p>
                        </div>
                    </div>

                    <div class="reviews_success">
                        <h2>Your Success is Our Mission</h2>
                        <p><strong>At DEGAMO LAW FIRM</strong> your success is our mission. We are dedicated to providing the highest quality
                            legal services and achieving results that not only meet but exceed your expectations.</p>
                    </div>
              
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    created(){ 
        this.$store.dispatch('title/setTitle', 'Reviews');
    },
}
</script>