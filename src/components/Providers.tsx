'use client';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { loadLabelsFromStorage } from '@/store/labelsSlice';
import { loadFromLocalStorage } from '@/store/localStorageMiddleware';

interface ProvidersProps {
  children: React.ReactNode;
}

const StoreInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Загружаем данные из localStorage при инициализации
    const savedLabels = loadFromLocalStorage();
    if (savedLabels.length > 0) {
      store.dispatch(loadLabelsFromStorage(savedLabels));
    }
  }, []);

  return <>{children}</>;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <StoreInitializer>
        {children}
      </StoreInitializer>
    </Provider>
  );
};

export default Providers;
