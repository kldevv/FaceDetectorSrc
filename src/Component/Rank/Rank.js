import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <p className='f1 white' style={{paddingTop: '60px'}}> 
        {'Face Detector'}
      </p>
      <div className='white f3'  style={{paddingTop: '20px'}}>
        {`Enter your image URL and press detect\r`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;