import Alert from 'react-bootstrap/Alert';
import React, { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';

function parseDate(datToParse) {
    return (datToParse.getMonth() + 1) + '/' + datToParse.getFullYear();
}

function Education (props) {
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
                const loadedSchools = data.educations.map(school => {
                const startDate = new Date(school.startDate);
                const endDate = new Date(school.endDate);
                const formattedStartDate = parseDate(startDate);
                const formattedEndDate = parseDate(endDate);
                return (
                    <Accordion.Item eventKey={school.id.toString()} key={school.id}>
                        <Accordion.Header>{school.name} ({formattedStartDate} - {formattedEndDate})</Accordion.Header>
                        <Accordion.Body>
                            <p><strong>{school.degree}</strong></p>
                            <p>{school.comments}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                );
            });
            setData(loadedSchools);
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
            <div id="education">
                <h2>Education</h2>
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

        <div id="education">
            <h2>Education</h2>
            <Accordion  flush>
                {data}
            </Accordion>
        </div>


    );

}

export default Education;