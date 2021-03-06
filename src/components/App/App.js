import React from 'react';

const App = () => (
  <div className="container">
    <div className="pomodoro">
      <h2>Pomodoro</h2>
      <div className="outer-circle">
        <div className="time">00:00</div>
      </div>
      <button type="button" className="button">Start</button>
    </div>
  </div>
);

App.displayName = 'App';

export default App;
