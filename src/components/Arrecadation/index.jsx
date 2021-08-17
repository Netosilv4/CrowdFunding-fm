import React from 'react';
import {
  Div, Progress, DivText, Border, H1,
} from './styles';
import { Section, P } from '../UI';

function Arrecadation() {
  return (
    <>
      <Section>
        <Div>
          <DivText>
            <H1>$80,000</H1>
            <P>of $1000,000 backed</P>
          </DivText>
          <Border />
          <DivText>
            <H1>5,000</H1>
            <P>total backers</P>
          </DivText>
          <Border />
          <DivText>
            <H1>56</H1>
            <P>days left</P>
          </DivText>
        </Div>
        <DivText>
          <Progress><progress id="file" value="80" max="100" /></Progress>
        </DivText>
      </Section>
    </>
  );
}

export default Arrecadation;
