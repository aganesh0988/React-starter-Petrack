import React from 'react';
import PetDetailPage from './PetDetailPage.js';


function App(props) {
  // if (!props.pet) {
  //   return null
  // }
  return (
    <PetDetailPage pet={props.pet} />


  );
}

App.defaultProps = {
  pet: {}
}

export default App;
