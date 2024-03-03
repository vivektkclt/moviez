// ToastHook.tsx
import Toast from 'react-native-toast-message';
import React, {createContext, useContext, useCallback} from 'react';

interface ToastContextProps {
  showToast: (toastConfig: {
    type: 'error' | 'success' | 'info';
    message: string;
  }) => void;
}

// Create a context to provide the Toast functions
const ToastContext = createContext<ToastContextProps | undefined>(undefined);

// Create a custom hook for using the Toast functions
const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};
export default useToast;

// Create a provider to wrap your application with to provide Toast functions
export const ToastProvider = ({children}: any) => {
  const showToast = useCallback(
    ({
      type,
      message,
    }: {
      type: 'error' | 'success' | 'info';
      message: string;
    }) => {
      Toast.show({
        type,
        text1:
          type === 'error' ? 'Error' : type === 'success' ? 'Success' : 'Info',
        text2: message,
        visibilityTime: 4000,
        autoHide: true,
      });
    },
    [],
  );

  return (
    <>
      <ToastContext.Provider value={{showToast}}>
        {children}
        <Toast />
      </ToastContext.Provider>
    </>
  );
};
