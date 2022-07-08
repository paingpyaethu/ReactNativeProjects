import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const Cart = props => (
  <Svg
    viewBox="0 0 32 32"
    fill="none"
    stroke={props.colors}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    width={props.width}
    height={props.height}>
    <Path d="M6 6h24l-3 13H9m18 4H10L5 2H2" />
    <Circle cx={25} cy={27} r={2} />
    <Circle cx={12} cy={27} r={2} />
  </Svg>
);

export default Cart;
