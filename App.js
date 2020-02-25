import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import {MediaContext, MediaProvider} from './contexts/MediaContext';
import Navigator from './navigators/Navigator';

const mediaArray = [

];

const App = () => {
  return (
    <MediaProvider>
      <Navigator/>
    </MediaProvider>
  );
};

export default App;
