import {create} from 'zustand';

interface GlobalStoreInterface {
  isLoading: boolean;
}
const initialValues: GlobalStoreInterface = {
  isLoading: false,
};
const useGlobalStore = create<GlobalStoreInterface>(set => ({
  ...initialValues,
  updateLoading: (data: any) =>
    set(() => ({
      isLoading: data,
    })),
}));

export default useGlobalStore;
