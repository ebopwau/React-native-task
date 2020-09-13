import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Layout from './src/hoc/Layout.js';
import Gallery from './src/components/Gallery';

export default function App() {
  return (
    <View style={styles.container}>
        <Layout>
            <Gallery />
        </Layout>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: 'rgb(191, 186, 190)'
    }
});
