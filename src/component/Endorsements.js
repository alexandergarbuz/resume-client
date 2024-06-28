import React, { useState, useEffect } from "react";
import Avatar from './Avatar';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';

class Data {
    constructor(data, error, isLoaded) {
        this.data = data;
        this.error = error;
        this.isLoaded = isLoaded;
    }
}

async function loadData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Cannot load data");
        }
        const data = await response.json();
        return new Data(data, null, true);
    } catch (error) {
        console.log(error);
        return new Data(null, error, false);
    }
}

function Endorsements(props) {
    const [data, setData] = useState(new Data(null, null, false));
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const result = await loadData(props.apiUrl);
            //console.log("Fetched data:", result.data.recommendations); 
            setData(result.data.recommendations);
            setLoading(false);
        }
        fetchData();
    }, [props.apiUrl]);

    if (isLoading) {
        return (
        <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
        </div>
        );
    }

    return (
        <div>
        <Carousel data-bs-theme="dark">
            {data.map((r, index) => (
                <Carousel.Item key={index}>
                    <div className="d-flex justify-content-center align-items-center p-3" style={{ minHeight: '500px', backgroundColor: '#fff' }}>
                    <Carousel.Caption>

                    <Avatar 
                    id={r.id} 
                    src={props.imageBaseUrl + r.avatarUrl} 
                    size="100px"
                    link={r.linkedInProfileUrl}
                    header1={r.author}
                    header2={r.authorTitle}
                    header3={r.relationship}
                    />
                        <p style={{textAlign : 'justify'}}>{r.text}</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
        </div>
    );
}

export default Endorsements;