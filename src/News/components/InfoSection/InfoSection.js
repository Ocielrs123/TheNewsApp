import React from 'react';
import { Container } from '../../globalStyles';
import {
  InfoSec,
  InfoColumn,
  TopLine,
} from './InfoSection.elements';

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
            <InfoColumn>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
            </InfoColumn>
            <InfoColumn>
 
            </InfoColumn>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
