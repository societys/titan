import React from 'react';
import Panel from "../styles/Panel";
import {Segment} from "semantic-ui-react";

const CenteredPanel = props => {
    return (
        <Panel>
            <Segment basic textAlign={"center"}>
                {props.children}
            </Segment>
        </Panel>
    )
};

export default CenteredPanel;
