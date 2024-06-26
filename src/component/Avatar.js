import React  from "react";


function Avatar(props) {

    const { id, src, size, link, header1, header2, header3 } = props;

    return (
        <div  id={'avatarImageBlock' + id} style={{textAlign:'center'}}>
            <div>
                <a id={'avatarImageLink' + id} href={link} target="_blank">
                    <img id={'avatarImage' + id} src={src} width={size} height={size} alt={header1} title={header1} style={{borderRadius:'50%'}} />
                </a>
            </div>
            <div>
                <a id={'avatarHeaderLink' + id} href={link} target="_blank"><strong>{header1}</strong></a><br/>
                <i>{header2}</i><br/>
                {header3}
            </div>
        </div>
    );
}
export default Avatar;
