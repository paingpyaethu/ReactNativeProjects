import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Dashboard = props => (
  <Svg width={props.width} height={props.height} style={props.style}>
    <Path d="M-3-3h24v24H-3z" />
    <Path
      d="M16 2v2h-4V2h4ZM6 2v6H2V2h4Zm10 8v6h-4v-6h4ZM6 14v2H2v-2h4ZM18 0h-8v6h8V0ZM8 0H0v10h8V0Zm10 8h-8v10h8V8ZM8 12H0v6h8v-6Z"
      fill={props.colors}
    />
  </Svg>
);

export default Dashboard;
