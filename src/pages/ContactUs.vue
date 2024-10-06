<template>
    <div class="contact-us-page">
        <div class="contact_area">
            <div class="wrapper">
                <div class="contact_area_con">
                    <div class="contact_boxes">
                        <div class="contact_left">
                            <h2>Contact Us.</h2>

                            <h3>Degamo Law Office</h3>
                            <ul class="contact_address">
                                <li>Office hours: 8:00AM – 5:00PM</li>
                                <li><address>Ibabao,Cordova,Cebu 6017 Philippines</address></li>
                            </ul>

                            <a class="waze_btn">GO TO WAZE</a>

                            <ul class="contact_infos">
                                <li><span>Office Nos.:</span> +612 3456 7890 | (+63) 912 345 6790</li>
                                <li><span>Mobile/WhatsApp/Viber:</span> (+63) 912 345 6790</li>
                                <li><span>E-mail:</span> degamotest@gmail.com</li>
                            </ul>
                        </div>
                        <div class="contact_right">
                            <div class="custom_header">
                                <h2>Contact Form</h2>
                            </div>
                            <div class="custom_form">
                                <div class="fields">
                                    <label>Name</label>
                                    <input class="g-input outline" type="text"/>
                                </div>
                                <div class="fields">
                                    <label>Phone</label>
                                    <input class="g-input outline" type="text"/>
                                </div>
                                <div class="fields">
                                    <label>Email Address</label>
                                    <input class="g-input outline" type="text"/>
                                </div>
                                <div class="fields">
                                    <label>Subject</label>
                                    <input class="g-input outline" type="text"/>
                                </div>
                                <div class="fields">
                                    <label>Message</label>
                                    <input class="g-textarea" type="text"/>
                                </div>
                            </div>
                            <a href="javascript:;" class="g-button">Submit</a>
                            <div class="agreement">
                                By clicking “Submit” and providing my personal information, I understand and agree that Degamo Law Office may contact me about its servicesthrough the information I have provided.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="map_area">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.8878272686416!2d123.94472417497406!3d10.27062126831981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99a40cb6f07c1%3A0xcf2ff8c71c4fd116!2sIbabao%20Barangay%20Hall!5e0!3m2!1sen!2sph!4v1728205988318!5m2!1sen!2sph" width="600" height="627" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>
  
<script>
export default {
    created(){
        this.$store.dispatch('title/setTitle', 'Contact Us');
    },
}
</script>