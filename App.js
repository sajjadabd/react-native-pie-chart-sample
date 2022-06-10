/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import PieChart from 'react-native-pie-chart';



import {
  Colors
} from 'react-native/Libraries/NewAppScreen';





const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const widthAndHeight = 250
    const series = [123, 321, 123, 789]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']
    const sliceColor2 = ['#C70039','#44CD40','#404FCD', '#EBD22F' , ]
  
  
    const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        
        <View style={styles.container}>

        <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
          />





        <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor2}
            doughnut={true}
            coverRadius={0.45}
            coverFill={backgroundStyle.backgroundColor}
            
          />

        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
