import {useState} from 'react';
import './Technology.scss';

interface TechnologyData {
    technology: {
      name: string;
      images: string;
      description: string;
      id:number;
    }[];
  }
  
  const Technology = ({ data0 }: { data0: TechnologyData }) => {

    const [technologyIndex, setTechnologyIndex] = useState(0);
    const currentTechnology = data0.technology[technologyIndex];
  
    const setTechnologyData = (index: number) => {
      setTechnologyIndex(index);
    };
  
    return (
      <div className='container-technology'>
          <h1>Kосмический запуск</h1>
        <div className='container-info-technology'>
          <ul>
            {data0.technology.map((technology, index) => (
              <button className='btn-technology' key={index} onClick={() => setTechnologyData(index)}>
                {technology.id}
              </button>
            ))}
          </ul>
          <div className='info-technology'>
            <h2>{currentTechnology.name}</h2>
            <p>{currentTechnology.description}</p>
          </div>
          <div className="images-technology">
            <img src={currentTechnology.images} alt={currentTechnology.name}/>
          </div>
        </div>
      </div>
    );
  };
  
  export default Technology;