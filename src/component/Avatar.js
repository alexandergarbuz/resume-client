import { useState, useEffect } from "react";
import React  from "react";


function Avatar(props) {

    const id = props.id;
    const src = props.src;
    const size = props.size;
    const link = props.link;
    const header1 = props.header1;
    const header2 = props.header2;
    const header3 = props.header3;

    return (
        <div id={id} style={{textAlign:'center'}}>
            <img src={src} width={size} height={size} alt={header1} style={{borderRadius:'50%'}} />
            <p>
                <a href={link} target="_blank"><strong>{header1}</strong></a><br/>
                <i>{header2}</i><br/>
                {header3}
            </p>

        </div>
    );
}
export default Avatar;
