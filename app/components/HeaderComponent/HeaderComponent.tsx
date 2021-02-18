import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

let dimensions = Dimensions.get('window');
let cardHeight = Math.round((dimensions.height * 1) / 15);
let devWidth = dimensions.width;

import {USER} from '../../../images/index';
import ButtonBlue from '../ButtonBlue/ButtonBlue';
import ButtonLight from '../ButtonLight/ButtonLight';

const headerComponent: FC = () => {
  return (
    <View style = {styles.headerContainer}>
      <View style={styles.headerComponent}>
        <View style={styles.headerText}>
          <Text style={styles.upperText}>Hello ,</Text>
          <Text style={styles.userNameText}>Abdur Rahman</Text>
        </View>
        <View>
          <Image source={USER} style={styles.userImage} />
        </View>
      </View>
      <View>
        <View style = {styles.buttonContainer}>
        <ButtonBlue 
            title = "My Day"        
        />
        <ButtonLight 
            title = "Important"        
        />
        </View>
      </View>
    </View>
  );
};

export default headerComponent;

const styles = StyleSheet.create({
    headerContainer:{
        padding:10
    },
  headerComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:5
  },
  headerText: {
    flexDirection: 'column',
  },
  upperText: {
    color: 'gray',
    fontSize: cardHeight * 0.5,
    fontWeight: '600',
  },
  userNameText: {
    color: 'black',
    fontSize: cardHeight * 0.6,
    fontWeight: '700',
  },
  userImage: {
    height: cardHeight * 1.5,
    width: devWidth * 0.2,
    shadowColor: '#ccc',
    elevation: 9,
    shadowRadius: 5,
    borderRadius: cardHeight * 0.4,
    overflow: 'hidden',
  },
});
