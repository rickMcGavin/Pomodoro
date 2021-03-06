import React, { useState, useRef, useEffect } from 'react';
import CountDown from 'react-countdown';
import { useSpring, animated } from 'react-spring';
import Display from '../Display/Display';
import usePomo from '../../hooks/usePomo';
import { CIRCLE_PATH } from '../../constants';
import { CONFIG } from '../../constants';

// TODO: Fix animation reverse when paused.
// TODO: When paused, reset button does reset animation. Animation only resets when currently running

const App = () => {
  const initTime = CONFIG[10]
  // Hook to get our data and functions we need for the timer
  const {
    time, handleReset, timerRef, active, setActive, setTime, resetAnimation
  } = usePomo();

  // react-spring stuff
  const props = useSpring({
    config: { duration: initTime },
    from: { stroke: '0, 100' },
    stroke: active ? '100, 100' : '0, 100',
    reset: resetAnimation
  })
  const { stroke } = props;

  // Custom renderer for the timer display
  const renderer = ({
    total, completed, formatted,
  }) => <Display total={total} completed={completed} formatted={formatted} setTime={setTime} />;

  return (
    <div className="container">
      <div className="pomodoro">
        <h2>Pomodoro</h2>
        <div className="outer-circle">
          <CountDown
            ref={timerRef}
            date={Date.now() + time}
            renderer={renderer}
            autoStart={false}
          />
          <svg className="svg" viewBox="0 0 36 36" width="250">
            <path className="circle" d={CIRCLE_PATH} />
            <animated.path
              className="animate-circle"
              d={CIRCLE_PATH}
              strokeDasharray={stroke}
            />
          </svg>
        </div>
        <div>
          <button onClick={() => setActive(!active)} type="button" className="button">{!active ? 'Start' : 'Pause'}</button>
          <button onClick={handleReset} type="button" className="button">Reset</button>
        </div>
      </div>
    </div>
  );
};

App.displayName = 'App';

export default App;
