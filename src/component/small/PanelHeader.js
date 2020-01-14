import React from 'react'
import styled from 'styled-components';

const SegmentContainer = styled.div`
  font-family: "Aspira-Regular", Arial, Helvetica, sans-serif;
  font-weight: bold;
  display: block;
  width: 60%;
  border-bottom-style: solid;
  border-bottom-color:${props => props.reversed?'white':'black'};
  text-align: ${props => props.right?'left':'right'};
  margin:${props => props.right?'20px 0 20px auto':'20px auto 20px 0'};
  padding: 5px;
  text-transform: uppercase;
  line-height: 48px;
  font-size: 48px;
  border-width: thin;
  color:${props => props.reversed?'white':'black'};
  
  @media (max-width: 500px) {
    font-size: 1.5em;
    padding:0;
    line-height: 1em;
  }
`;

const PanelHeader=(props) => {

    return (
        <SegmentContainer right={props.right} reversed={props.reversed}>
            {props.title}
        </SegmentContainer>
    );
}

export default PanelHeader;
