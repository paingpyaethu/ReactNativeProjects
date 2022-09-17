import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';

const Home = () => {
  const [moviesImages, setMoviesImages] = useState('');
  const [popularMovies, setPopularMovies] = useState('');
  const [error, setError] = useState(false);
  const dimension = Dimensions.get('screen');
  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const moviesImagesArray = [];
        movies.forEach(movie => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });
        setMoviesImages(moviesImagesArray);
      })
      .catch(err => {
        setError(err);
      });
    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={moviesImages}
          autoplay={true}
          circleLoop={true}
          sliderBoxHeight={dimension.height / 1.5}
          dotStyle={styles.dotStyle}
        />
      </View>
      <View style={styles.carousel}>
        <List title="Populer Movies" content={popularMovies} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dotStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
  },
});

export default Home;
