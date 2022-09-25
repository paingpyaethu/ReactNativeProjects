import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {useResponsive} from '../hooks/useResponsive';
import {getMovies} from '../services/services';

const height = Dimensions.get('screen').height;

const DetailScreen = ({route, navigation}) => {
  const movieId = route.params.movieId;

  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);
  const placeholderImage = require('../../assets/images/placeholder.png');

  const responsive = useResponsive();
  const styles = responsiveStyle(responsive);

  useEffect(() => {
    getMovies(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);
  return (
    <>
      {loaded && (
        <ScrollView>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={
              movieDetail && movieDetail.poster_path
                ? {
                    uri:
                      'https://image.tmdb.org/t/p/w500' +
                      movieDetail.poster_path,
                  }
                : placeholderImage
            }
          />
          <View style={styles.container}>
            <Text style={styles.movieTitleText}>
              {movieDetail && movieDetail.title}
            </Text>
            {movieDetail.genres && (
              <View style={styles.genreContainer}>
                {movieDetail.genres.map(genre => {
                  return (
                    <Text style={styles.genreText} key={genre.id}>
                      {genre.name}
                    </Text>
                  );
                })}
              </View>
            )}
          </View>
        </ScrollView>
      )}
      {!loaded && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </>
  );
};

const responsiveStyle = responsive =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: height / 2,
      backgroundColor: 'black',
    },
    movieTitleText: {
      fontSize: responsive.size22,
      fontWeight: 'bold',
      marginVertical: responsive.size10,
    },
    genreContainer: {
      flexDirection: 'row',
    },
    genreText: {
      marginRight: responsive.size10,
      fontSize: responsive.size16,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
    },
  });
export default DetailScreen;
