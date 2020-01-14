import React from 'react';
import styled from 'styled-components';
import Panel from "../styles/Panel"
import videoImage from "../../static/img/video_shot.PNG"
import PlayButton from "../../component/small/PlayButton"

const VideoDisplay = () => {
    return (
        <VideoPanel>
            <FlexContentWrapper>
                <Title>Your Safety Is Our Priority</Title>
                <FooterText>Introducing the Most Advanced</FooterText>
                <FooterText>two way Emergency Mass Communication Platform</FooterText>
            </FlexContentWrapper>
            <CenterContainer>
                <VideoWrapper>
                    <PlayButtonCenterContainer>
                        <PlayButton/>
                    </PlayButtonCenterContainer>
                    <VideoBox src={videoImage}/>
                </VideoWrapper>
            </CenterContainer>


        </VideoPanel>
    )
};

export default VideoDisplay;


const VideoPanel = styled(Panel)`
  position:relative;
  padding-top: 80px;
  padding-bottom: 340px;
  margin-bottom: 100px;
  background: #0F2027;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  @media (max-width: 500px) {
  padding-top: 70px;  
  padding-bottom: 200px;
  margin-bottom: 20px;
  }
`;

const Title = styled.span`
  font-family: "Aspira-Regular", Arial, Helvetica, sans-serif;
  color:white;
  line-height: 1.1;
  font-size: 2.3em;
  font-weight: bold;
  text-align: center;
  margin:0 30px 10px 30px;
  border-bottom-style: solid;
  border-bottom-color: white;
  border-width:thin;
  padding-bottom:5px;
 
  @media (max-width: 500px) {
  margin:5px;
  }
`;

const FlexContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
 
`;

const VideoBox = styled.img`
  width: 100%;
  height:100%;
  margin:10px auto;
  background: white;
  
  -webkit-box-shadow: 10px 10px 37px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 37px -8px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 37px -8px rgba(0,0,0,0.75);
`;

const CenterContainer = styled.div`
  left:0;
  position:absolute;
  width:100%;
  text-align: center;
`;

const VideoWrapper = styled.div`
  margin:auto;
  width:822px;
  height:390px;
  transition:-webkit-filter 0.5s , filter 0.5s;
  -webkit-filter: grayscale(80%); 
  filter: grayscale(80%); 
  &:hover {
    -webkit-filter: grayscale(0%); 
    filter: grayscale(0%); 
  }
  
  @media (max-width: 500px) {
    width:70%;
    height: auto;
  }
`;

const PlayButtonCenterContainer = styled(CenterContainer)`
  top:46%;
  z-index: 2;
`;

const FooterText = styled.div`
  color:white;
  font-weight: bold;
  text-align: center;
`;
