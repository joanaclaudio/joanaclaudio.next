import React from 'react';
import tecnologias from '@/app/data/tecnologia.json';
import CardTecnologia from '@/components/CardTecnologia';


interface Tecnologia {
  title: string;
  image: string;
  description: string;
  rating: number;
}

const TecnologiasPage: React.FC = () => {
  return (
    <div>
      <h1 style={{fontSize: 20
      }}><strong>Tecnologias Aprendidas:</strong></h1>
      <br />
      <div className="cards-container" style={{display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'}}>
        {tecnologias.map((tec: Tecnologia, index: number) => (
          <CardTecnologia
            key={index}
            title={tec.title} 
            image={tec.image}
            description={tec.description}
            rating={tec.rating}
          />
          
        ))}
        
      </div>

      
    </div>
  );
};

export default TecnologiasPage;
