import React from 'react'

function LogoImage(props) {
    return (
        <img src={props.source} className={props.class} alt={props.alt} />
    );
}
function FontAwesomeIcon(props) {
    return (

        <i className={props.class}></i>
    );
}

function ContactInformation () {

    return (
        <div id="topNavigation" className="w3-content w3-panel">
            <div className="w3-row">
                <div className="w3-col m3 w3-left w3-padding-32">
                    <img src="./img/Alexander-Garbuz-150x150-avatar.jpg" className="w3-circle" alt="Photo of Alexander Garbuz"/>
                </div>
                <div className="w3-col m6 w3-left w3-padding-16">
                    <h1>Alexander Garbuz</h1>
                    <p>Senior IT professional with more than 25 years of combined software development, leadership and management experience in insurance, healthcare, telecommunications, and e-commerce industries.</p>
                    <p>
                        <i className="fa fa-envelope"/>&nbsp;<a href="mailto:alexander.garbuz@gmail.com">alexander.garbuz@gmail.com</a><br/>
                        <i className="fa fa-internet-explorer"/>&nbsp;<a href="http://garbuz.com">www.garbuz.com</a><br/>
                        <i className="fa fa-linkedin"/>&nbsp;<a href="https://www.linkedin.com/in/garbuz/">https://www.linkedin.com/in/garbuz/</a><br/>
                    </p>
                </div>
            </div>
        </div>
    );

}

export default ContactInformation;