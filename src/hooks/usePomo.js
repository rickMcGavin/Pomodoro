import { useState, useRef, useEffect } from 'react';
import { CONFIG } from '../constants';

const usePomo = () => {
  const initTime = CONFIG[10];
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(initTime);
  const [diff, setDiff] = useState(((time/60) / (initTime/60)) * 100);

  const timerRef = useRef();
  const { stop = () => {}, start = () => {}, pause = () => {}, isStopped = () => false } = timerRef?.current?.api || {};

  const handleReset = () => {
    if (active) {
      setActive(!active)
      stop();
    };
    setTime(initTime);
    setDiff(((initTime/60) / (initTime/60)) * 100)
  };

  useEffect(() => {
    if (active) {
      setDiff(((time/60) / (initTime/60)) * 100);
      start();
    } else {
      if (isStopped()) {
        setTime(initTime);
      } else {
        pause();
      }
    }
  }, [active, time, diff]);

  return {
    time,
    handleReset,
    timerRef,
    active,
    setActive,
    setTime,
    initTime,
    diff
  }
}

export default usePomo;
