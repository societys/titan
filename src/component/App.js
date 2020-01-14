import React from 'react'
import TopNav from "./navigation/TopNav";
import VideoDisplay from "./panel/VideoDisplay";
import PanelHeader from "./small/PanelHeader";
import ContactUsButton from "./small/ContactUsButton";
import CenteredPanel from "./panel/CenteredPanel";
import PartnerPanel from "./panel/PartnersPanel";
import {FooterPanel} from "../component/panel/FooterPanel"

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
            <PanelHeader title='Testimonies' right/>
            <PanelHeader title='Technologies' left/>
            <FooterPanel/>
        </div>
    )
};

export default App;
