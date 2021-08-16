import React from 'react';
import {
  Section, H1, P, Div, Progress,
} from './styles';

function Arrecadation() {
  return (
    <>
      <Section>
        <Div>
          <H1>$80,000</H1>
          <P>of $1000,000 backed</P>
        </Div>
        <Div>
          <H1>5,000</H1>
          <P>total backers</P>
        </Div>
        <Div>
          <H1>56</H1>
          <P>days left</P>
        </Div>
        <Div>
          <Progress id="file" value="80" max="100" />
        </Div>
      </Section>
    </>
  );
}

export default Arrecadation;
