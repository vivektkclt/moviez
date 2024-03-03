import {useState, useEffect} from 'react';
import {END_POINTS} from '../../constants/apiConstants';
import useGetApi from '../hooks/useGetApi';

interface ErrorResponse {
  message: string;
  // Add more properties if needed
}

interface FetchMoviesResponse {
  movieResponse: any[];
  loading: boolean;
  error: ErrorResponse | null;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const useFetchMovies = (): FetchMoviesResponse => {
  const [get] = useGetApi();
  const [movieResponse, setResponse] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const params = {
        language: 'en',
        with_original_language: 'ml',
        page: page,
      };
      try {
        const response = await get({
          endPoint: END_POINTS.movieList,
          params: params,
        });
        setResponse(response);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMovies();

    return () => {
      // Cleanup function if needed
    };
  }, [page, get]);

  return {movieResponse, loading, error, setPage};
};

export default useFetchMovies;
