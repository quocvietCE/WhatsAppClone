import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';

import RootRouter from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootRouter />
    </>
  );
};

export default App;
