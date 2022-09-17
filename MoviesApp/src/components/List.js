import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Card from './Card';

// class List extends React.PureComponent {
//   render() {
//     const {title} = this.props;
//     return (
//       <View>
//         <Text>{title}</Text>
//       </View>
//     );
//   }
// }

const List = props => {
  return (
    <View style={styles.listContainer}>
      <View>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <View>
        <FlatList
          data={props.content}
          renderItem={({item}) => <Card item={item} />}
          horizontal={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
});

export default List;
