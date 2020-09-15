import React from 'react';

const PetInformationItem = props =>
  // if (!props.pet) {
  //   return null
  // }
  // return (
  <>
    <dt>{props.name}</dt>
    <dd>{props.value}</dd>
  </>
//  );
//}
PetInformationItem.defaultProps = {
  value: "loading..."
};


export default PetInformationItem;
