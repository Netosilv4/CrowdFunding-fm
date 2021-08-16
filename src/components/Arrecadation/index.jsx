import React from 'react';
import {
  Section, H1, P, Div, Progress, DivText, Border,
} from './styles';

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
          <div>
            <H1>56</H1>
            <P>days left</P>
          </div>
        </Div>
        <DivText>
          <Progress><progress id="file" value="80" max="100" /></Progress>
        </DivText>
      </Section>
    </>
  );
}

export default Arrecadation;
