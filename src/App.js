import React from 'react';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { store } from './store';

function App() {
  const { t } = useTranslation();
  return (
    <Provider store={store}>
      <div className="text-success">
        <h1>{t('test')}</h1>
      </div>
    </Provider>
  );
}

export default App;
