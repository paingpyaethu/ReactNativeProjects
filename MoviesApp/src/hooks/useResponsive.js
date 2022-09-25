import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

export function useResponsive() {
  const dimension = Dimensions.get('screen').height;

  const [screenInfo, setScreenInfo] = useState();
  const [size10] = useState(dimension / 84.5);
  const [size16] = useState(dimension / 52.81);
  const [size20] = useState(dimension / 42.25);
  const [size22] = useState(dimension / 38.4);

  useEffect(() => {
    setScreenInfo({size10, size16, size20, size22});
  }, [size10, size16, size20, size22]);

  return {...screenInfo};
}
