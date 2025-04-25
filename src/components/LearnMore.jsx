import React from "react";
import './Learn.css'
const LearnMore=()=>{
    return(
        <div className="main-cont">
            <div className="learn-container">
            <div className="des">
                <h1>🩸 Learn More About the Blood Donation Process</h1>
                <p>Donating blood is a simple act of kindness — and understanding the process can make your experience even smoother. Here's everything you need to know before, during, and after you donate.</p>
            </div>

            <div className="card-steps">
                <h2>Before You Donate</h2>
                <p>Check Your Eligibility</p>
                <ul>
                    <li>Age: Typically 18-65 years</li>
                    <li>Weight: Minimum 50 kg</li>
                    <li>General Health: Should be in good health with no recent illness</li>
                    <li>Recent Activities: No tattoos or piercings in the last 6 months</li>
                </ul>
                <br />
                <p>Prepare Yourself</p>
                <ul>
                    <li>Eat a healthy meal 2-3 hours before donating</li>
                    <li>Drink plenty of water the night before and the day of donation</li>
                    <li>Get a good night's sleep</li>
                </ul>
            </div>
            <div className="card-steps">
                <h2>During Donation</h2>
                <p>Arrival & Registration</p>
                <ul>
                    <li>Bring a valid ID</li>
                    <li>Answer a few health and lifestyle questions</li>
                    <li>Undergo a quick hemoglobin and blood pressure check</li>
                </ul>

                <br />
                <p>The Donation Itself</p>
                <ul>
                    <li>The process takes about 10-15 minutes</li>
                    <li>A sterile needle is used just once — completely safe and hygienic</li>
                    <li>You'll donate approximately 350-450 ml of blood, depending on your body weight</li>
                </ul>
            </div>
            <div className="card-steps">
                <h2>After You Donate</h2>
                <p>Immediate Recovery</p>
                <ul>
                    <li>
                    Rest for 10-15 minutes
                    </li>
                    <li>Enjoy a snack and some juice — it's on us!</li>
                </ul>
                <br />
                <p>Post-Donation Care</p>
                <ul>
                    <li>Avoid heavy physical activity for the next 24 hours</li>
                    <li>Stay hydrated and eat iron-rich foods</li>
                    <li>Your body naturally replenishes the lost blood within 24-48 hours</li>

                </ul>
            </div>
            <div className="addition-detail">
                <h2>What Happens to Your Blood?</h2>
                <ul>
                    <li>Your donation is tested and processed for safety</li>
                    <li>It's separated into components: red cells, platelets, and plasma</li>
                    <li>These components can go on to save up to three lives!</li>
                </ul>
                <br />
                <h2>Why It Matters</h2>
                <p>Every donation is a beacon of hope for someone in need — accident victims, cancer patients, mothers during childbirth, and countless others. With just one appointment, you become part of a life-saving chain.

</p>
            </div>
            <div className="but">
                <div>Ready to Make a Difference?</div>
                <a href="/donate">Book Your Appointment Now</a>
            </div>
        </div>
        </div>
    )
}

export default LearnMore;