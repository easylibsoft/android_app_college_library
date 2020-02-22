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
      source={{ uri: 'http://vivekananda.easylib.net' }}
      style={{ marginTop: 5 }}
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
          Server Offline
          </Text>
          <Text>
          Please try again later
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
    backgroundColor:'lightblue',
    padding: 15
  }
});
