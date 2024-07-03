import Alert from 'react-bootstrap/Alert';
import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Accordion from 'react-bootstrap/Accordion';

function Footer (props) {
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
            <div id="footer">
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
        <div id="footer"style={{paddingTop: 30, paddingBottom: 100 }}>
            <p>This is a React front end for a Spring Boot miscroservice.</p>
            <p><i className='fa fa-copyright' /> GARBUZ.COM {new Date().getFullYear()}</p>
            <hr />
            <Accordion  flush>
            <Accordion.Item eventKey={data.id.toString()} key={data.id}>
                        <Accordion.Header><i className='fa fa-code' />  View Source Data</Accordion.Header>
                        <Accordion.Body>
                        {data ? (
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        ) : (
                            <p>No data available</p>
                        )}
                        </Accordion.Body>
                    </Accordion.Item>
            </Accordion>
        </div>
    );

}
export default Footer;