import React, {FC} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

let dimensions = Dimensions.get('window');
let cardHeight = Math.round((dimensions.height * 1) / 15);
let carWidth = dimensions.width;

interface Props {
  title: String;
}

const ButtonLight: FC<Props> = (Props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        //onPress={this.props.onPress}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textField}>{Props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonLight;

const styles = StyleSheet.create({
  buttonContainer: {},
  buttonStyle: {
    backgroundColor: '#CCCCCC',
    width: carWidth * 0.3,
    height: cardHeight * 1.2,
    borderRadius: cardHeight * 0.2,
    justifyContent: 'center',
  },
  textContainer: {
    alignSelf: 'center',
  },
  textField: {
    color: '#fff',
    fontSize: 18,
  },
});
