import '../../styles/main.scss';
import './politicalInterests.scss';
import React, {useState} from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRipple,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCol,
} from 'mdb-react-ui-kit';

export default function Cards(interest) {
  const [readMoreModal, setReadMoreModal] = useState(false);
  const { id, title, text, image } = interest.interest.attributes;
  const toggleShow = () => setReadMoreModal(!readMoreModal);

  console.log(interest.interest);

  return (
    <MDBCol className='political-interest-card' id={id}>
      <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
          <a href='/'>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>{text.slice(0, 165)}...</MDBCardText>
          <MDBBtn onClick={toggleShow}>Mehr Erfahren</MDBBtn>
          <MDBModal show={readMoreModal} setShow={setReadMoreModal} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>{title}</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>{text}</MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color='secondary' onClick={toggleShow}>
                    Schliessen
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
