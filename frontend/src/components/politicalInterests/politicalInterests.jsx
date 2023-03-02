import '../../styles/main.scss';
import './politicalInterests.scss';
import React, {useState, useEffect} from 'react';
import {
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';
import Cards from './cards';
import axios from 'axios';

export default function PoliticalInterests() {
  const [politicalInterests, setPoliticalInterests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/political-interests')
      .then(response => {
        setPoliticalInterests(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='politicalInterests'>
      <MDBContainer>
        <MDBRow className='justify-content-center'>
          <h1>Meine politischen Interessen</h1>
        </MDBRow>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
          {politicalInterests.length > 0 && politicalInterests.map((interest) => (
            <Cards key={interest.id} interest={interest} />
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
