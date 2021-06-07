import React from 'react';

const Finalstep = ({ success }) => {
  if (success === undefined) {
    return (
      <div>
        {/* <h1>Message : {success[1]}</h1>
        <h1>Control Number : {success[2]}</h1>
        <h1>Total Amount : {success[3]}</h1> */}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Message : {success[1]}</h1>
        <h1>Control Number : {success[2]}</h1>
        <h1>Total Amount : {success[3]}</h1>
      </div>
    );
  }
};

export default Finalstep;
