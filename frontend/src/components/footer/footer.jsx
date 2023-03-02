import '../../styles/main.scss';
import './footer.scss';
import React from 'react';
import {
  MDBContainer,
  MDBFooter,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center footer'>
      <div className='container p-4'>
        <section className='mb-4 social-media'>
          <MDBBtn
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <i className='fab fa-facebook-f'></i>
          </MDBBtn>

          <MDBBtn
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <i className='fab fa-twitter'></i>
          </MDBBtn>

          <MDBBtn
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <i className='fab fa-google'></i>
          </MDBBtn>

          <MDBBtn
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <i className='fab fa-instagram'></i>
          </MDBBtn>

          <MDBBtn
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <i className='fab fa-linkedin-in'></i>
          </MDBBtn>

          <MDBBtn
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <i className='fab fa-github'></i>
          </MDBBtn>
        </section>

        <section className='mb-4 disclaimer-text'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam,
            commodi optio pariatur est quia magnam eum harum corrupti dicta,
            aliquam sequi voluptate quas.

            Imnpressum bla bla
          </p>
        </section>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
        © {new Date().getFullYear()} - Gil Lohner
      </div>
    </MDBFooter>
  );
}
