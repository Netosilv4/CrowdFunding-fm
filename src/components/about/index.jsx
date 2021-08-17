import React from 'react';
import products from '../../helper/rewardCards/texts';
import { Section, H2, P } from '../UI';
import RewardCard from '../rewardCards';

const About = () => (
  <Section cardWidth="60%" style={{ gap: '30px', textAlign: 'left', alignItems: 'left' }}>
    <H2>
      About this project
    </H2>
    <P>
      The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that
      elevates your screen to a more comfortable viewing height. Placing your
      monitor at eye level has the potential to improve your posture and make you
      more comfortable while at work, helping you stay focused on the task at hand.
    </P>
    <P>
      Featuring artisan craftsmanship, the simplicity of design creates extra desk
      space below your computer to allow notepads, pens, and USB sticks to be stored
      under the stand.
    </P>
    {
      products.map((e) => (
        <RewardCard
          product={e}
          desactivate={e.quantity === 0}
        />
      ))
    }
  </Section>
);

export default About;
