import React, {useEffect, useState} from 'react';
import {getPartnerImages} from '../../service/static/PartnerService'
import styled from 'styled-components';

const PartnerPanel = () => {
    const [logoList, setLogoList] = useState([]);

    useEffect(() => {
        (async () => {
            const arrayData = await getPartnerImages();
            setLogoList(arrayData);
        })()

    }, []);

    const RenderList = () => {
        return logoList.map((oneImage, index) => (
            <PartnerImage key={oneImage.title + index}
                          src={oneImage.url}
                          alt={oneImage.title}/>
        ));
    };

    return (
        <PartnerListContainer>
            <RenderList/>
        </PartnerListContainer>
    );
};

export default PartnerPanel;

const PartnerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin:0 150px;
  
  @media (max-width: 500px) {
    margin:0 50px;
  }
  
`;

const PartnerImage = styled.img`
    max-height:200px ;
    max-width:200px ;
    margin:50px;
    
  @media (max-width: 500px) {
    max-height:120px ;
    max-width:120px ;
  }
`;
