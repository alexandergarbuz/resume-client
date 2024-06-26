import React, { useState } from "react";

function Certifications() {
    const[isVisible, setVisible] = useState(false);
    function toggleVisibility() {
        setVisible(!isVisible);
    }

    return (
    <div id="certifications">
            <h2>Certifications
            &nbsp;
            <a 
                onClick={toggleVisibility}
                title={isVisible ? 'Collapse' : 'Expand'}
            >
            <i className="fa fa-plus expandCollapseIcon" style={{visibility: (isVisible) ? 'hidden' : 'visible', display: (isVisible) ? 'none' : 'inline'}}/>
            <i className="fa fa-minus expandCollapseIcon" style={{visibility: (isVisible) ? 'visible' : 'hidden'}}/>
            </a>
        </h2>
        <div style={{display: (isVisible) ? 'block' : 'none'}}>
            <ul>
                <li><strong>Master Certificate in Project Management</strong> (2011) - University of Wisconsin, Madison</li>
            </ul>
        </div>
        <hr/>
    </div>
    );

}

export default Certifications;