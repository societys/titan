import React from 'react';
import { Button, Modal } from 'semantic-ui-react'
import styled from 'styled-components';

const PlayButton = () => {
    return (
        <Modal trigger={<VideoButton size='huge' color='red' icon='play'/>}
               basic size='large'>
            <Modal.Content>
                <IframeContainer>
                    <IframeVideo width="560"
                                 height="315"
                                 src="https://www.youtube.com/embed/mtvlEyOA9MY?autoplay=1&rel=0"
                                 frameBorder="0"
                                 scrolling="no"
                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                 allowFullScreen/>
                </IframeContainer>
            </Modal.Content>
        </Modal>
    )
};

export default PlayButton;

const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0;
  margin:0;
`;

const IframeVideo = styled.iframe`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const VideoButton = styled(Button)`
`
