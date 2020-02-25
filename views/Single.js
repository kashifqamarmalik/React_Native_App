import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';


const mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = (props) => {
  const {navigation} = props;
  console.log('Singel navi', navigation.state);
  const file = navigation.state.params.file;
  return (
    <View style={styles.container}>
      <Text>{file.title}</Text>
      <Image
        resizeMode='contain'
        spinnerColor='#b3e5fc'
        style={styles.image}
        source={{uri: mediaURL + file.filename}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

Single.propTypes = {
  navigation: PropTypes.object,
  file: PropTypes.object,
};

export default Single;
