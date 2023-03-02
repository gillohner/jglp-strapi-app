import '../styles/main.scss';
import React from 'react';
import PoliticalInterests from '../components/politicalInterests/politicalInterests';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import InstagramFeed  from 'react-ig-feed'

export default function Overview() {
  return (
    <>
      <MDBContainer>
        <PoliticalInterests />
        {/* <InstagramFeed token="990602627938098"  counter="6"/> */}
      </MDBContainer>
    </>
  );
}
