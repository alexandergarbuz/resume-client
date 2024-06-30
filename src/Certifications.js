import Alert from 'react-bootstrap/Alert';
import React, { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';

function Certifications (props) {
    const[data, setData] = useState([]);
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
                const certifications = data.certifications.map(certification => {
                const date = new Date(certification.date);
                return (
                    <Accordion.Item eventKey={certification.id.toString()} key={certification.id}>
                        <Accordion.Header>{certification.name} ({date.getFullYear()})</Accordion.Header>
                        <Accordion.Body>
                            <p><strong>{certification.name}</strong><br/>
                            {certification.authority} , {date.getFullYear()}
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                );
            });
            setData(certifications);
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
            <div id="certifications">
                <h2>Certifications</h2>
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
        <div id="certifications">
            <h2>Certifications</h2>
            <Accordion  flush>
                {data}
            </Accordion>
        </div>
    );

}

export default Certifications;