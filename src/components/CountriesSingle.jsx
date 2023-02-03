import React from 'react';

import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CountriesSingle = () => {
const { single } = useParams()

  return (
    <Container>
      <div>Single Country will be here</div>
    </Container>
  );
};

export default CountriesSingle;
