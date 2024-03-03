import api from '../interceptor';
import useToast from '../../hooks/ToastHook';
import useGlobalStore from '../../store/globalStore';
export interface GetData {
  params?: any;
  endPoint: string;
  isLoader?: boolean;
}

interface GetResponse {
  data?: any;
  results?: any;
  status?: any;
  message?: any;
  total_pages?: number;
  backdrops?: any[];
  posters?: any[];
}

const useGetApi = (): [(data: GetData) => Promise<GetResponse>] => {
  const {showToast} = useToast();
  const globalState = useGlobalStore;

  const get = async (data: GetData, retry = false): Promise<GetResponse> => {
    const {isLoader = false} = data;
    globalState.setState({isLoading: isLoader});
    const params = {
      api_key: '2c834036e39d0d0fd93395fce3f285c1', //TMDB API KEY
    };
    try {
      const response = await api.get<GetResponse>(data.endPoint, {
        params: {...params, ...data.params},
      });
      setTimeout(() => {
        globalState.setState({isLoading: false});
      }, 2000); //API is too fast u will never see my loader thats why added timeout
      return response.data;
    } catch (error: any) {
      globalState.setState({isLoading: false});
      if (!retry && error.message.includes('Network Error')) {
        return get(data, true);
      } else {
        // setLoading(false);
        if (error.response && error.response?.status === 400) {
          showToast({type: 'error', message: error.response?.data?.message});
        } else if (error.response && error.response?.status === 422) {
          console.log(error.response);
          const msg = Object.values(error.response?.data?.message).join('\n');
          showToast({type: 'error', message: msg});
        } else if (error.response && error.response?.status === 401) {
          console.log(error.response);
          showToast({type: 'error', message: error.response?.data?.message});
        } else if (error.response && error.response?.status === 500) {
          console.log(error.response);
          showToast({type: 'error', message: 'Server error'});
        } else if (error?.message) {
          showToast({type: 'error', message: error?.message});
        } else {
          showToast({type: 'error', message: 'Api error!!'});
        }
        throw error;
      }
    }
  };

  return [get];
};

export default useGetApi;
