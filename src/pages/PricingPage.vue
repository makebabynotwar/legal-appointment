<template>
    <div class="pricing-page">
        <div id="pricing_intro">
            <div class="wrapper">
                <div class="pricing_intro_con">
                    <div class="pricing_intro">
                        <h2>“Transparent Fees, Trusted Service”</h2>
                    </div>
                </div>
            </div>
        </div>

        <div id="pricing_intro2">
            <div class="wrapper">

                <div class="pricing_into2_con">

                    <div class="pricing_header">
                        <h2>"Justice delayed is justice denied."</h2>
                        <p>– William E. Gladstone</p>
                    </div>

                    <div class="pricing_content">
                        <h2>Your Peace of Mind, Our Priority</h2>
                        <p>        At Degamo Law Firm, we understand the value of clarity, especially when it comes to legal fees. Our approach to transparent, uncomplicated pricing ensures you receive high-quality legal representation without the stress of complex fee structures. We're committed to providing legal solutions that are not only effective but also straightforward and predictable in terms of costs.</p>
                    </div>
                    

                    <div class="pricing_boxes">
                        <div class="pricing_box">
                            <h2>Initial Consultation</h2>
                            <div class="pricing_details">
                                <h3>Understanding Your Needs</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div class="pricing_details">
                                <h3>Tailored Approach</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="pricing_box">
                            <h2>Uncomplicated and Transparent Fee Structure</h2>
                            <div class="pricing_details">
                                <h3>Simplicity in Pricing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div class="pricing_details">
                                <h3>Personalized Fee Arrangements</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <div class="pricing_boxes2">
                        <h2>Accessible, Quality Legal Representation</h2>
                        <p>Quality legal services shouldn't be a luxury. At Degamo Law Firm, we're committed to offering top-tier legal assistance with uncomplicated, transparent pricing.</p>
                        <p>Contact us today for a consultation and experience the difference of clear, uncomplicated pricing in legal services.</p>
                    </div>

                    <div class="pricing_footer">
                        <h2>At  Degamo Law Firm, our expertise, empathy, and straightforward pricing ensure your legal journey is stress-free and successful.</h2>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    created(){
        this.$store.dispatch('title/setTitle', 'Pricing');
    },
}
</script>   