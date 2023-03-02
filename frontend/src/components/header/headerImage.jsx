import '../../styles/main.scss';
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
 } from 'mdb-react-ui-kit';

export default function HeaderImage() {
  return (
    <div
      className='p-5 bg-image headerImage'
      style={{ backgroundImage: "url('https://nextcloud.lohner.cloud/apps/files_sharing/publicpreview/MHg5kJ6wyX6sekn?file=/&fileId=371384&x=1920&y=1080&a=true')" }}
    >
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div className='d-flex align-items-center h-100'>
          <MDBContainer>
            <div className='text'>
              <h1 className='mb-3'>GIL LOHNER</h1>
              <h4 className='mb-3'>ICH KANDIDIERE FÜR DEN NATIONALRAT IM KANTON SCHWYZ.</h4>
              <MDBBtn tag="a" size="lg">
                Call to action
              </MDBBtn>
            </div>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}
