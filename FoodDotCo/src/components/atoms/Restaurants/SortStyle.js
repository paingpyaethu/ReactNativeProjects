import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';
import Metrics from '../../../theme/Metrics';

const SortStyle = isActive => {
  isActive
    ? styles.sortListItem
    : {...styles.sortListItem, borderBottomColor: Colors.DEFAULT_WHITE};
};

const styles = StyleSheet.create({
  sortListItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.DEFAULT_YELLOW,
    height: Metrics._scale(40),
  },
});
export default SortStyle;
