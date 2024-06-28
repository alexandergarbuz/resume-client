import React, { useState, useEffect } from 'react';
import {CarouselComponent, Slide} from './component/Carousel';

function Recommendations  (props)  {

    const [slides, setSlides] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(props.apiUrl)
            .then(response => {
                response.json();
            })
            .then(data => {
                // console.log("Loaded data:" + data);
                const fetchedSlides = data.recommendations.map(recommendation => new Slide(
                    recommendation.author, 
                    recommendation.authorTitle, 
                    recommendation.linkedInUrl,
                    recommendation.relationship, 
                    props.imageBaseUrl + recommendation.avatarUrl,
                    recommendation.text
                ));
                setSlides(fetchedSlides);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching slides:', error);
                setLoading(false);
            });
    }, []);

    if(isLoading) {
        <div id="recommendations">
            <h2>Recommendations</h2>
            <p>Loading data....</p>
            <hr/>
        </div>
    }
    return (
        <div id="recommendations">
            <h2>Recommendations</h2>
            <CarouselComponent slides={slides} />
            <hr/>
        </div>
    );
};
export default Recommendations;
