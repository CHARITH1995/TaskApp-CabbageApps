import React, {FC, useState, useEffect} from 'react';
import {View, Text, Dimensions, Image, StyleSheet , TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {CLOCK, CHECKED , DELETE} from '../../../images/index';
import { Task, TaskList , CheckedTaskList} from '../../../data';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

interface Props {
    id:number;
  name: string;
  startDate: string;
  is_checked: Boolean;
  setTaskChecked : (id : number) =>void
  setTaskUnChecked : (id: number) =>void
  removeTask : (id:number, is_checked:Boolean) => void
}

const TaskComponent: FC<Props> = (Props) => {
  const [checked, setChecked] = useState<string>('false');
 


  return (
    <View>
      <View style={styles.sliderContainer}>
        <View style={styles.slderTextContainer}>
          <View>
            <Text style={[Props.is_checked ? styles.slidertextChecked : styles.slidertext]}>{Props.name}</Text>
            <View style={styles.imageContainer}>
              <Image source={CLOCK} />
  <Text style={styles.slidertext_artist}>{Props.startDate}</Text>
            </View>
          </View>
          <View style = {{flexDirection:'column'}}>
            {!Props.is_checked ? (
              <View>
                <RadioButton
                  value={checked}
                  status={checked === 'true' ? 'checked' : 'unchecked'}
                  onPress={()=>Props.setTaskChecked(Props.id)}
                />
              </View>
            ) : (
              <View>
                <TouchableOpacity onPress = {()=>Props.setTaskUnChecked(Props.id)}>
                <Image source={CHECKED} style={styles.iconstyle}  />
                </TouchableOpacity>
              </View>
            )}
            <View>
                <TouchableOpacity onPress = {()=>Props.removeTask(Props.id,Props.is_checked)}>
                <Image source={DELETE} style={styles.removeIconstyle}  />
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TaskComponent;

const styles = StyleSheet.create({
  sliderImage: {
    height: screenHeight * 0.1,
    width: screenWidth * 0.98,
    borderRadius: screenWidth * 0.01,
  },
  imageContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  sliderContainer: {
    width: screenWidth * 0.85,
    backgroundColor: '#cccccc',
    borderRadius: screenWidth * 0.01,
    elevation: 5,
    alignSelf: 'center',
    marginTop: screenHeight * 0.015,
  },

  slidertext: {
    fontSize: screenHeight * 0.03,
    color: '#000',
    fontWeight: '200',
  },
  slidertextChecked: {
    textDecorationLine: 'line-through',
    fontSize: screenHeight * 0.03,
    color: '#000',
    fontWeight: '200',
  },
  slidertext_artist: {
    fontSize: screenHeight * 0.02,
    color: '#666666',
    fontWeight: '200',
    padding: 5,
  },
  slderTextContainer: {
    borderBottomLeftRadius: screenWidth * 0.01,
    borderBottomRightRadius: screenWidth * 0.01,
    padding: screenHeight * 0.01,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconstyle: {
    height: screenWidth * 0.06,
    width: screenWidth * 0.06,
  },
  removeIconstyle:{
    height: screenWidth * 0.09,
    width: screenWidth * 0.09,
    marginTop:screenHeight * 0.01
    
  }
});
