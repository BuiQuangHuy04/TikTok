import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Home from './src/screens/Home';

import '@ant-design/icons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <Home />
      <AntDesign name={'heart'} size={30} />
    </SafeAreaView>
  );
};

export default App;
