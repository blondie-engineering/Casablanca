import React, { useLayoutEffect, useState} from 'react';
import './App.css';
import { Main } from "./components/main/main";
import { MobileMain } from "./components/mobileMain/mobileMain";


function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function App(props: any) {
  const [width] = useWindowSize();
  return width > 1200 ? <Main/> : <MobileMain/>
}

export default App;
