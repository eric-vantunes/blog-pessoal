import React from 'react';
import Image from '../../assets/picture.png';

import './home.css';

function Home() {
  return (
    <><div className='container'>
      <div className='content'>
        <h1>Eric Antunes</h1>
      </div>
      <div className='image'>
        <img src={Image} alt="Profile" />
      </div>
    </div>
    </>
  );
}

export default Home;