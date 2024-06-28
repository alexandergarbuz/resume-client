import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';

function parseDate(datToParse) {
    return (datToParse.getMonth() + 2) + '/' + datToParse.getFullYear();
}

function WorkHistory(props) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(props.apiUrl)
            .then(response => {
                if(! response.ok) {
                    throw new Error("Cannot load data");
                }
                return response.json();
            })
            .then(data => {
                const loadedJobs = data.jobs.map(job => {
                const startDate = new Date(job.start);
                const endDate = new Date(job.end);
                const formattedStartDate = parseDate(startDate);
                const formattedEndDate = parseDate(endDate);

                    return (
                        <Accordion.Item eventKey={job.id.toString()} key={job.id}>
                            <Accordion.Header>{job.title} @ {job.companyName} ({formattedStartDate} - {formattedEndDate})</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    {job.responsibilities.map(r => (
                                        <li key={r.id}>{r.text}</li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                });
                setData(loadedJobs);
                setLoading(false);
            })
        .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
        });
    }, [props.apiUrl]);

    if (isLoading) {
        return (
            <div id="workHistory">
                <h2>Work History</h2>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div id="workHistory">
            <h2>Work History</h2>
            <Accordion>
                {data}
            </Accordion>
        </div>
    );
}

export default WorkHistory;
