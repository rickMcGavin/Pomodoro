import { useState, useRef, useEffect } from 'react';
import { CONFIG } from '../constants';

const usePomo = () => {
  const initTime = CONFIG[10]
  const [resetAnimation, setResetAnimation] = useState(false);
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(initTime);

  const timerRef = useRef();
  const { stop = () => {}, start = () => {}, pause = () => {}, isStopped = () => false } = timerRef?.current?.api || {};

  const handleReset = () => {
    if (active) {
      setActive(!active)
      return stop();
    };
    setTime(initTime);
  };
  
  useEffect(() => {
    if (active) {
      start();
      if (resetAnimation) setResetAnimation(!resetAnimation);
    } else {
      pause();
      if (isStopped()) {
        setResetAnimation(!resetAnimation);
        setTime(initTime);
      }
    }
  }, [active]);

  return {
    time,
    handleReset,
    timerRef,
    active,
    setActive,
    setTime,
    resetAnimation
  }
}

export default usePomo;
