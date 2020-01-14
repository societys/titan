import React ,{useState} from 'react'
import { Progress, Segment } from 'semantic-ui-react'

const TestimonyPanel = () => {
    const [progress,setProgress] = useState({
        current:0,
        max:100,
        percent:0,
    });

    const [images,setImages] = useState([]);

    return (
        <Segment>
            <Progress percent={50} attached='bottom'/>
        </Segment>
    );
};

export default TestimonyPanel;
