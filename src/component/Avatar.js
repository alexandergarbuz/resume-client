import React from "react";

function Avatar(props) {

    const id = props.id;
    const src = props.src;
    const size = props.size;
    const name = name;
    const title = props.title;
    const link = props.link;
    const relationship = props.relationship;


    return (
        <div id={id} style={{textAlign:'center'}}>
            <img src={src} width={size} height={size} alt={title} style={{borderRadus: '50%'}} />
            <p><a href={link} target="_blank"><strong>{name}</strong></a></p>
            <p>{title}</p>
            <p>{relationship}</p>

        </div>
    );
}
export default Avatar;
