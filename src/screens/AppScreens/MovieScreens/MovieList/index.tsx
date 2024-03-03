/* eslint-disable react-hooks/exhaustive-deps */
import {View, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonStyles from '../../../../common/CommonStyles';
import {MovieCard, SearchBox} from '../../../../components';
import useGetApi from '../../../../api/hooks/useGetApi';
import {END_POINTS} from '../../../../constants/apiConstants';
import moment from 'moment';

const MovieList = () => {
  const [get] = useGetApi();

  //STATE variables
  const [page, setPage] = useState<number>(1);
  const [searchTxt, setSearch] = useState<string>('');
  const [totalPages, setTotal] = useState<number>(1);
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    getMovies(1);
  }, []);

  //API CALL FOR MOVIE LIST
  const getMovies = async (currentPage: number, prevMovies = []) => {
    const params = {
      language: 'en',
      with_original_language: 'ml',
      page: currentPage,
      sort_by: 'primary_release_date.desc',
      'primary_release_date.lte': moment(new Date()).format('YYYY-MM-DD'),
    };
    const response = await get({
      endPoint: searchTxt ? END_POINTS.search : END_POINTS.movieList,
      params: searchTxt ? {query: searchTxt, ...params} : params,
      isLoader: currentPage === 1 ? true : false,
    });
    setMovies([...prevMovies, ...(response?.results || [])]);
    setTotal(response?.total_pages || 1);
  };
  const handleLoadMore = () => {
    if (totalPages > page) {
      getMovies(page + 1, movies);
      setPage(page + 1);
    }
  };

  //SEARCH
  const handleSearch = () => {
    setPage(1);
    setMovies([]);
    getMovies(1, []);
  };
  return (
    <View style={CommonStyles.container.appWrapper}>
      <SearchBox
        value={searchTxt}
        onEndEditing={handleSearch}
        onChangeText={(text: string) => setSearch(text)}
      />
      <FlatList
        data={movies}
        renderItem={({item}: any) => {
          return (
            <>
              {item?.backdrop_path || item?.poster_path ? (
                <MovieCard
                  release_date={item?.release_date}
                  title={item?.title}
                  id={item.id}
                  backdrop_path={item?.backdrop_path || item?.poster_path || ''}
                />
              ) : null}
            </>
          );
        }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        keyExtractor={(item, index) => index + item.id.toString()}
        ListFooterComponent={totalPages > page ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

export default MovieList;
