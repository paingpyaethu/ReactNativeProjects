import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  getCrimeMovies,
  getFamilyMovies,
  getPopularMovies,
  getPopularTV,
  getUpcomingMovies,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';

const HomeScreen = () => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [crimeMovies, setCrimeMovies] = useState();
  const [error, setError] = useState(false);
  const dimension = Dimensions.get('screen');

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTV(),
      getFamilyMovies(),
      getCrimeMovies(),
    ]);
  };
  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMovies,
          popularMoviesData,
          popularTvData,
          familyMoviesData,
          crimeMoviesData,
        ]) => {
          const moviesImagesArray = [];
          upcomingMovies.forEach(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });
          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setFamilyMovies(familyMoviesData);
          setCrimeMovies(crimeMoviesData);
        },
      )
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <>
      <ScrollView style={styles.container}>
        {/* Upcoming Movies */}
        {moviesImages && (
          <View style={styles.sliderContainer}>
            <SliderBox
              images={moviesImages}
              autoplay={true}
              circleLoop={true}
              sliderBoxHeight={dimension.height / 1.5}
              dotStyle={styles.dotStyle}
            />
          </View>
        )}

        {/* Popular Movies */}
        {popularMovies && (
          <View style={styles.carousel}>
            <List title="Popular Movies" content={popularMovies} />
          </View>
        )}

        {/* Popular TV Shows */}
        {popularTv && (
          <View style={styles.carousel}>
            <List title="Popular TV Shows" content={popularTv} />
          </View>
        )}

        {/* Family Movies */}
        {familyMovies && (
          <View style={styles.carousel}>
            <List title="Family Movies" content={familyMovies} />
          </View>
        )}

        {/* Crime Movies */}
        {crimeMovies && (
          <View style={styles.carousel}>
            <List title="Crime Movies" content={crimeMovies} />
          </View>
        )}
      </ScrollView>
    </>
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

export default HomeScreen;
