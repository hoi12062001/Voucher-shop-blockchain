function FooterSesion() {
    return (
        <div class="container bg-black">
            <div class="row">
                <div class="col-md-4">
                    <h1 class="address_text">Address</h1>
                    <div class="location_text"><a href="/"><img src="images/map-icon.png" alt="" /><span class="padding_left_15">No.123 Chalingt Gates,</span></a></div>
                    <div class="location_text"><a href="/"><img src="images/call-icon.png" alt="" /><span class="padding_left_15">( +01 9876543210 )</span></a></div>
                    <div class="location_text"><a href="/"><img src="images/mail-icon.png" alt="" /><span class="padding_left_15">Locations</span></a></div>
                </div>
                <div class="col-md-4">
                    <h1 class="address_text">Social link</h1>
                    <div class="location_text"><a href="/"><img src="images/fb-icon.png" alt="" /><span class="padding_left_15">Facebook</span></a></div>
                    <div class="location_text"><a href="/"><img src="images/twitter-icon.png" alt="" /><span class="padding_left_15">Twitter</span></a></div>
                    <div class="location_text"><a href="/"><img src="images/instagram-icon.png" alt="" /><span class="padding_left_15">Instagram</span></a></div>
                    <div class="location_text"><a href="/"><img src="images/Linkedin-icon.png" alt="" /><span class="padding_left_15">Linkedin</span></a></div>
                </div>
                <div class="col-md-4 ">
                    <h1 class="address_text">Newsletter</h1>
                    <input type="text" class="enter_text" placeholder="Enter Your Email" />
                    <div class="subscribe_bt"><a href="/">subscribe</a></div>
                </div>
            </div>
        </div>
    );
}
export default FooterSesion;