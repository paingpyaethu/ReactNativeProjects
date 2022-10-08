import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import Metrics from '../../theme/Metrics';

const PageStyle = isActive =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: Colors.DEFAULT_GREY};

const styles = StyleSheet.create({
  page: {
    height: Metrics._scale(8),
    width: Metrics._scale(15),
    backgroundColor: Colors.PRIMARY_COLOR,
    borderRadius: Metrics._scale(32),
    marginHorizontal: Metrics._scale(5),
  },
});
export default PageStyle;
