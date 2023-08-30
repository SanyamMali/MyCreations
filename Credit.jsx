import React, { useEffect, useState } from 'react';

const MovieCredits = ({ credits }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`movie-credits ${isVisible ? 'visible' : ''}`}>
      <div className="credit-container">
        {credits.map((credit, index) => (
          <div key={index} className="credit">
            <div className="credit-text">
              <span className="designation">{credit.designation}</span>
              <span className="name">{credit.name}</span>
            </div>
          </div>
        ))}
        <div className="credit thank-you">Thank You</div>
      </div>
    </div>
  );
};

const styles = `
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: black;
  }

  .movie-credits {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 24px;
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
  }

  .movie-credits.visible {
    animation: credits-scroll 20s linear infinite, fade-in 2s ease-in-out;
  }

  .credit-container {
    width: 80%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  .credit {
    padding: 12px 0;
    text-align: center;
    opacity: 0.9;
    letter-spacing: 1px;
    transition: transform 0.3s ease-in-out;
    animation: fade-in 2s ease-in-out, fade-out 2s ease-in-out infinite alternate;
  }

  .credit:hover {
    transform: scale(1.05);
    animation: none;
  }

  .credit-text {
    font-weight: lighter;
    justify-content: space-between;
    align-items: center;
  }

  .designation {
    font-weight: normal;
    font-size: 18px;
  }

  .name {
    font-weight: lighter;
    padding-left: 8px;
    font-size: 18px;
  }

  .credit.thank-you {
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    animation: fade-in 2s ease-in-out;
  }

  @keyframes credits-scroll {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.9;
    }
  }
`;

const App = () => {
  const creditsList = [
    { designation: 'Director:', name: 'John Doe' },
    { designation: 'Producer:', name: 'Jane Smith' },
    { designation: 'Screenwriter:', name: 'Alice Johnson' },
    { designation: 'Cinematographer:', name: 'Bob Brown' },
    { designation: 'Editor:', name: 'Ella Davis' },
    { designation: 'Production Designer:', name: 'Charlie White' },
    { designation: 'Music Composer:', name: 'Grace Wilson' },
    { designation: 'Sound Designer:', name: 'Henry Martin' },
    { designation: 'Costume Designer:', name: 'Olivia Lee' },
    { designation: 'Stunt Coordinator:', name: 'Liam Harris' },
    // Add more names and roles as needed
  ];

  return (
    <div className="App">
      <style>{styles}</style>
      <div className="movie-credits">
        <MovieCredits credits={creditsList} />
      </div>
    </div>
  );
};

export default App;