import Alert from 'react-bootstrap/Alert';
import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';

function ContactInformation (props) {
    const[data, setData] = useState(null);
    const[isLoading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        fetch(props.apiUrl)
            .then(response => {
                if(! response.ok) {
                    throw new Error("Cannot load data");
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
        })
        .catch(error =>{
            console.log('Error fetching data:', error);
            setLoading(false);
            setError(error);
        });

    }, [props.apiUrl]
    )
    if (isLoading) {
        return (
            <div id="summary">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }
    if(error != null) {
        return (
            <Alert variant="danger" onClose={() => setError(null)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>Something went wrong with your request: {error.message}</p>
          </Alert>
        );
    }
    return (
        <div id="summary" style={{display:'flex',  alignItems: 'flex-start', paddingTop: 50, paddingBottom: 30 }}>
                <img src="./img/Alexander-Garbuz-150x150-avatar.jpg" alt="Photo of Alexander Garbuz" 
                            style={{borderRadius:'50%', maxWidth:100, marginRight: '20px' }}/>
                <div>
                    <h3>{data.firstName} {data.lastName}</h3>
                    <p>{data.summary}.</p>
                    <p>
                        <i className="fa fa-envelope"/>&nbsp;<a href={'mailto:' + data.email}>{data.email}</a><br/>
                        <i className="fa fa-phone"/>&nbsp;{data.phone}<br/>
                    </p>
                </div>
        </div>
    );

}
export default ContactInformation;