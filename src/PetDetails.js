import React from 'react';
import PetDetailList from './PetDetailList';

const PetDetails = props =>
  <PetDetailList pet={props.pet} />


;

PetDetails.defaultProps= {
  pet: {
    PetType: {}
  }

};

export default PetDetails;
