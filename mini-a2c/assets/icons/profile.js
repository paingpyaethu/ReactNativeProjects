import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Profile = props => (
  <Svg viewBox="0 0 32 32" width={props.width} height={props.height}>
    <Path
      fill={props.colors}
      d="M16 16a7 7 0 1 0-7-7 7 7 0 0 0 7 7Zm0-12a5 5 0 1 1-5 5 5 5 0 0 1 5-5ZM17 18h-2A11 11 0 0 0 4 29a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1 11 11 0 0 0-11-11ZM6.06 28A9 9 0 0 1 15 20h2a9 9 0 0 1 8.94 8Z"
    />
  </Svg>
);

export default Profile;
