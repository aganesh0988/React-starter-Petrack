import React from 'react';
import Navigation from './Navigation.js';
import PetDetails from './PetDetails.js';


const PetDetailPage = props =>
  <>
    <Navigation/>
    <PetDetails pet={props.pet} />
  </>
;


export default PetDetailPage;
