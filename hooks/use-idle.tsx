import { useEffect, useState } from "react";

const useIdle = (timeout: number = 10000): boolean => {
  const [isIdle, setIdle] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const startTimer = () => {
      clearTimeout(timer);
      setIdle(false);
      timer = setTimeout(() => setIdle(true), timeout);
    };
    startTimer();

    window.addEventListener("mousemove", startTimer);
    window.addEventListener("keydown", startTimer);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", startTimer);
      window.removeEventListener("keydown", startTimer);
    };
  }, [timeout]);

  return isIdle;
};

export default useIdle;
