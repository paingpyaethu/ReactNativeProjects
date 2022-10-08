import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

export function useOrientation() {
  const [screenInfo, setScreenInfo] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = result => {
      setScreenInfo(result.screen);
    };
    const eventListener = Dimensions.addEventListener('change', onChange);
    return () => eventListener.remove();
  }, []);

  return {
    ...screenInfo,
    isPortrait: screenInfo.height / 100 > screenInfo.width / 100,
  };
}
