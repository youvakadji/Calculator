import React from 'react';
import styled from 'styled-components'
import Button from './Button';

const Container = styled.div`
    background: #323232;
    flex: 1;
`;
const Grid =styled.div`
    display: grid;
`;

const Calculator: React.FC<{}> = () => {
    return (
      <Container>
        <Grid>
          <Button/>
        </Grid>
      </Container>)
}

export default Calculator;