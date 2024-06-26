import React, { useState } from "react";

function Education () {

    const[isVisible, setVisible] = useState(false);

    function toggleVisibility() {
        setVisible(!isVisible);
    }

    return (

        <div id="education">

        <h2>Education
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
            <dl>
                <dt>Cardinal Stritch University (2006) - Madison, WI</dt>
                <dd>Master of Business Administration </dd>

                <dt>Nizhny Novgorod State Architecture Academy (1996) - Nizhny Novgorod, Russia</dt>
                <dd>Bachelor of Science in Civil Engineering and Management</dd>
                <dd>Graduated with honors (GPA 4.0)</dd>
                <dd>Awarded Presidential Scholarship in recognition of academic excellence (1994, 1995, and 1996)</dd>
            </dl>
        </div>

        </div>


    );

}

export default Education;