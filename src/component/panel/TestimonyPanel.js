import React, {useEffect, useState} from 'react'
import {getTestimonies} from '../../service/static/TestimonyService'
import {TestimonyComponent} from '../small/TestimonyComponent'

const TestimonyPanel = () => {
    const [currentProgress, setProgress] = useState(0);
    const [max, setMax] = useState(1);
    const [testimonies, setTestimonies] = useState([]);

    const { Provider, Consumer } = React.createContext({ color: 'black' });

    useEffect(() => {
        (async () => {
            const testimonies = await getTestimonies();
            setTestimonies(testimonies);
            setMax(testimonies.length);
        })()
    }, []);

    const nextItem = () =>{
        setProgress((currentProgress+1)/max);
    };

    return (
        <TestimonyComponent/>
    );
};

export default TestimonyPanel;
