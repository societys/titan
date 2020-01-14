import React from 'react'
import TopNav from "./navigation/TopNav";
import VideoDisplay from "./panel/VideoDisplay";
import PanelHeader from "./small/PanelHeader";
import ContactUsButton from "./small/ContactUsButton";
import CenteredPanel from "./panel/CenteredPanel";
import PartnerPanel from "./panel/PartnersPanel";
import {FooterPanel} from "../component/panel/FooterPanel"
import TestimonyPanel from '../component/panel/TestimonyPanel'
import styled from 'styled-components';

const App = () => {
    return (
        <div>
            <TopNav/>
            <VideoDisplay/>
            <CenteredPanel>
                <ContactUsButton/>
            </CenteredPanel>
            <PanelHeader title='Partners' left/>
            <PartnerPanel/>
            <TestimonyWrapper>
                <PanelHeader title='Testimonies' right reversed/>
                <TestimonyPanel/>
            </TestimonyWrapper>
            <PanelHeader title='Technologies' left/>
            <FooterPanel/>
        </div>
    )
};

export default App;

const TestimonyWrapper = styled.div`
  background: #0abdff;
  padding: 20px 0 ;
`;
