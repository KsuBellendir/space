import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className='container-home'>
      <div className='text-info'>
        <h6>Итак, вы хотите отправиться в</h6>
        <h1>КОСМОС</h1>
        <p>Давайте посмотрим правде в глаза: если вы хотите полететь в космос, 
          вы могли бы с таким же успехом действительно отправиться в открытый космос,
           а не парить как бы на его краю. Что ж, сядьте поудобнее, 
           расслабьтесь, потому что мы подарим вам поистине незабываемые впечатления</p>
      </div>
      <button className='explore-btn'>EXPLORE</button>
    </div>
  )
}

export default Home;