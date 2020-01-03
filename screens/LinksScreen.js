import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { WebView } from 'react-native-webview';


export default function LinksScreen() {
  return (

    <WebView
      source={{ uri: 'http://stjohnsmc.easylib.net' }}
      style={{ marginTop: 20 }}
      onError={(e)=> {
        return(
          <View>
            <Text>

            </Text>
          </View>
        )
      }
    }
    renderError={(f)=> {
      return(
        <View style={styles.errorContainer}>
          <Text>
          Unable to access server.
          </Text>
          <Text>
          Please check your internet connection or try again later.
          </Text>
        </View>
      )
    }
  }
       />);

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
  errorContainer: {
    alignItems:'center',
    flex: 10,
    backgroundColor:'white'
  }
});
