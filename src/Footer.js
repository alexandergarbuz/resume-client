import React from "react";

function Footer() {

    return (

        <div>

            <p>This is a simple web page built by me as a playground to learn React. </p>
            <p>It currently pulls the data as JSON object from a simple microservice written in PHP  and then displays this data in a clean and easy to read format.</p>
            <p>If you have any quesitons about my work or if you want to make me a job offer feel free to email me at &nbsp;<a href="mailto:alexander.garbuz@gmail.com">alexander.garbuz@gmail.com</a></p>
            <p>{new Date().getFullYear()} <i className="fa fa-copyright" /> </p>
        </div>

    );
}
export default Footer;