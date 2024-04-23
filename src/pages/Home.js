import React from 'react';
import ReactDOM from 'react-dom';
import uniaoanimal from '../image/uniaoanimal.png';
import './Home.css';

function Home() {
  return (
    <div className="container"> {/* Usando uma classe CSS */}
      <h1 className="title">Home</h1> {/* Usando uma classe CSS */}
      <div className="image"> {/* Usando uma classe CSS */}
        <img src={uniaoanimal} alt="Logo" />
      </div>
    </div>
  );
}

ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
