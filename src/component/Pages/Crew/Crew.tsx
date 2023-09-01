import React from 'react';
import Carousel from 'nuka-carousel';
import data0 from '../../../data/data0.json';
import './Crew.scss';

interface CrewMember {
  role: string;
  name: string;
  bio: string;
  images: string;
}

const CrewMemberSlide: React.FC<CrewMember> = ({ role, name, bio, images }) => (
  <div className='container-slid'>
    <section>
      <h4>{role}</h4>
      <h1>{name}</h1>
      <p>{bio}</p>
    </section>
    <section>
      <img src={images} alt={name} />
    </section>
  </div>
);

const Crew: React.FC = () => {
  return (
    <div className='container-crew'>
      <div className='crew-info'>
        <h3>ПОЗНАКОМЬСЯ СО СВОЕЙ КОМАНДОЙ</h3>
      </div>
      <div className='container-crew-slider'>
        <Carousel adaptiveHeight={true}>
          {data0.crew.map((member, index) => (
            <CrewMemberSlide
              key={index}
              role={member.role}
              name={member.name}
              bio={member.bio}
              images={member.images}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Crew; 