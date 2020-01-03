import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { WebView } from 'react-native-webview';


export default function LinksScreen() {
  return (

    <WebView source={{ uri: 'http://stjohnsmc.easylib.net' }} style={{ marginTop: 20 }} />);

    /*
    <ScrollView style={styles.container}>

      <ExpoLinksView />
    </ScrollView>
  );
  */
}

LinksScreen.navigationOptions = {
  title: 'Easylib',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
