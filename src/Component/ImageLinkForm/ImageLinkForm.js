import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <div className='center black'>
        <div className='form center pa2 br2 black shadow-5'>
          <input className='f4 pa2 w-70 center black' type='tex' onChange={onInputChange}/>
          <button
            className='center w-30 grow f4 link ph3 pv2 dib blakc'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;