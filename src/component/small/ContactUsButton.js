import React from 'react';
import {Button, Modal, Form, Segment, Header} from 'semantic-ui-react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components';

const ContactUsButton = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => alert(JSON.stringify(data));
    const componentData = {
        title: 'Want to Demo Titan HST?',
        titleDescr: 'Let us know a little bit about yourself so we can make sure you have the best experience'
    };

    return (
        <Modal trigger={
            <Button size='large' color='teal'>Request Demo</Button>
        }
               basic size='small'>
            <Modal.Content>
                <FormSegment>
                    <SectionWrapper>
                        <Header as='h2'>
                            <Header.Content>
                                {componentData.title}
                                <Header.Subheader>{componentData.titleDescr}</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </SectionWrapper>

                    <SectionWrapperReverse>
                        <Header as='h3'>
                            <Header.Content>
                                {componentData.title}
                            </Header.Content>
                        </Header>
                    </SectionWrapperReverse>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Field>
                            <label>Name *</label>
                            <FormInput ref={register({required: true})} name='name'/>
                            <label>Email *</label>
                            <FormInput ref={register({required: true})} name='email'/>
                            <label>Phone Number *</label>
                            <FormInput ref={register({required: true})} name='phone'/>
                            <label>Industry *</label>
                            <FormInput ref={register({required: true})} name='industry'/>
                            <label>Number of Users *</label>
                            <FormInput ref={register({required: true})} name='users'/>
                            <label>Additional Information *</label>
                            <FormInput ref={register({required: true})} name='info'/>
                        </Form.Field>
                        <Button>Submit</Button>
                    </Form>
                </FormSegment>
            </Modal.Content>
        </Modal>
    )
};

export default ContactUsButton;

const FormInput = styled.input`
  margin-bottom:10px !important;
`;

const SectionWrapper = styled.div`
  margin-bottom:30px;
  
  @media (max-width: 500px) {
    display: none;
  }
`;

const SectionWrapperReverse = styled.div`
  margin-bottom:30px;
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;

const FormSegment = styled(Segment)`
  padding:20px !important;
`;
