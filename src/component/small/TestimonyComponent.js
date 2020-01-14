import React, {useEffect} from 'react'
import {Card} from "semantic-ui-react";
import styled from 'styled-components';

export const TestimonyComponent = (props) =>{

    useEffect(()=>{
        console.log(props.testimony);
    },[props]);

    if(!props.testimony)
        return null;

    return (
            <CardContainer>
                <Card.Content>
                    <QuotationMark>“</QuotationMark>
                    <Quotes>
                        {props.testimony.text}
                    </Quotes>
                    <TestimoyImage src ={props.testimony.profileImage}/>
                    <Card.Header>{props.testimony.name}</Card.Header>
                    <Card.Meta>{props.testimony.title}</Card.Meta>
                    <Card.Description>
                        {props.testimony.org}
                    </Card.Description>
                </Card.Content>
            </CardContainer>
    )
}

const TestimoyImage = styled.img `
  width:50px;
  border:none;
  border-radius: 50%;
  margin:20px;
`;

const QuotationMark = styled.div`
  font-size: 10rem;
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color:white;
  position:absolute;
  top:70px;
  left:20px;
`;

const Quotes = styled.div `
  width: 100%;
  height: 220px;
  padding: 20px 50px;
  color:white;
  background: gray;
  font-size: 0.8em;
  vertical-align: middle;
  display: table-cell;
`;

const CardContainer = styled(Card)`
  width: 350px !important;
  height: 430px !important;
  border-radius: 0 !important;
  text-align: center;
  margin:10px !important;
`;
