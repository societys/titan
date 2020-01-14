import React, {useEffect, useState} from 'react'
import {getTestimonies} from '../../service/static/TestimonyService'
import {TestimonyComponent} from '../small/TestimonyComponent'
import styled from 'styled-components';

const TestimonyPanel = () => {
    const [testimonies, setTestimonies] = useState([]);

    useEffect(() => {
        (async () => {
            const testimonies = await getTestimonies();
            setTestimonies(testimonies);
        })()
    }, []);

    const ItemList = () => {
        return testimonies.map((testimony) => <TestimonyComponent testimony={testimony}/>);
    };

    return (
        <TestimonyList>
            <ItemList/>
        </TestimonyList>
    )
};

export default TestimonyPanel;

const TestimonyList = styled.div`
  padding:20px;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
`;
