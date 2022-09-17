import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const Card = props => {
  const placeholderImage = require('../../assets/images/placeholder.png');
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={
            props.item.poster_path
              ? {
                  uri:
                    'https://image.tmdb.org/t/p/w500' + props.item.poster_path,
                }
              : placeholderImage
          }
        />
        {!props.item.poster_path && (
          <Text style={styles.movieName}>{props.item.title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 120,
    height: 200,
    borderRadius: 10,
  },
  movieName: {
    position: 'absolute',
    top: 10,
    padding: 5,
  },
});

export default Card;
