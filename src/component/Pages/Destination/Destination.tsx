import {useState} from 'react';
import './Destination.scss';

interface DestinationData {
    destinations: {
      name: string;
      images: string;
      description: string;
      distance: string;
      travel: string;
    }[];
  }
  
  const Destination = ({ data0 }: { data0: DestinationData }) => {
    const [destinationIndex, setDestinationIndex] = useState(0);
    const currentDestination = data0.destinations[destinationIndex];
  
    const setPlanetData = (index: number) => {
      setDestinationIndex(index);
    };
  
    return (
      <div className='container-destination'>
        <div className='container-img'>
          <h1>Выберите пункт назначения</h1>
          <img src={currentDestination.images} alt='здесь фото планеты' />
        </div>
        <div className='container-info'>
          <ul>
            {data0.destinations.map((destination, index) => (
              <button className='btn-ul' key={index} onClick={() => setPlanetData(index)}>
                {destination.name}
              </button>
            ))}
          </ul>
          <h1>{currentDestination.name}</h1>
          <p>{currentDestination.description}</p>
          <div className="info-distance-time">
            <section>
                <p>Расстояние</p>
                <h3>{currentDestination.distance}</h3>
            </section>
            <section>
                <p>Время полёта</p>
                <h3>{currentDestination.travel}</h3>
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default Destination;