import React from 'react';
import './Monuments.css';

const monuments = [
  {
    name: 'Taj Mahal',
    description: 'The Taj Mahal is a white marble mausoleum in Agra, India. It was built by the Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.',
  },
  {
    name: 'Charminar',
    description: 'The Charminar is a monument and mosque located in Hyderabad, Telangana, India. The structure was built in 1591 AD.',
  },
  {
    name: 'Hawa Mahal',
    description: 'Hawa Mahal, also known as the "Palace of the Winds," is a palace in Jaipur, India. It is constructed of red and pink sandstone and has 953 small windows.',
  },
  {
    name: 'Qutub Minar',
    description: 'Qutub Minar is a UNESCO World Heritage Site in Delhi, India. It is a 73-meter tall minaret made of red sandstone and marble.',
  },
  {
    name: 'Lotus Temple',
    description: 'The Lotus Temple, located in Delhi, is a Baháʼí House of Worship known for its lotus flower-like shape. It is open to people of all faiths.',
  },
  {
    name: 'India Gate',
    description: 'India Gate is a war memorial in New Delhi, India. It is dedicated to the soldiers who died in World War I. It stands at 42 meters and is an iconic landmark.',
  },
  {
    name: 'Mysore Palace',
    description: 'The Mysore Palace is a historical palace in the city of Mysore, Karnataka, India. It is known for its grand architecture and is a popular tourist attraction.',
  },
  {
    name: 'Victoria Memorial',
    description: 'The Victoria Memorial is a large marble building in Kolkata, West Bengal, India. It was built in memory of Queen Victoria and is now a museum and tourist spot.',
  },
  {
    name: 'Gateway of India',
    description: 'The Gateway of India is an iconic arch monument in Mumbai, Maharashtra, India. It was built during the British colonial era and is a popular tourist attraction.',
  },
  {
    name: 'Ajanta Caves',
    description: 'The Ajanta Caves are rock-cut cave monuments in the state of Maharashtra, India. They are known for their ancient Buddhist cave paintings and sculptures.',
  },
];

function Monuments() {
  return (
    <div className="monuments-container">
      <h1>Monuments of India</h1>
      <div className="monuments-list">
        {monuments.map((monument, index) => (
          <div key={index} className="monument-card">
            <h2>{monument.name}</h2>
            <p>{monument.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Monuments;
