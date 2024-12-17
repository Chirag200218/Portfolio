import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const useMobileView = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = useDebouncedCallback(() => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {isMobileView: screenSize.width<=600 ? true : false};
};

export default useMobileView;