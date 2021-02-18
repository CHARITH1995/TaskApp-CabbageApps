import React, {FC, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions , Picker} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import DatePicker from 'react-native-datepicker';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {Task, TaskList} from '../../../data';

import ButtonBlue from '../../components/ButtonBlue/ButtonBlue';

let dimensions = Dimensions.get('window');
let cardHeight = Math.round((dimensions.height * 1) / 15);
let carWidth = dimensions.width;

const AddTaskScreen: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const taskAdd = () => {
    const task = {
      id: Math.random()*100,
      name: title,
      type: type,
      startDate: date,
      is_checked: false,
    };
    TaskList.push(task);
    setTitle('');
    setType('');
    setDate('');
  };

  return (
    <View style={{backgroundColor: '#w234s'}}>
      <HeaderComponent />
      <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          enableOnAndroid={true}
          enableAutomaticScroll={true}
        >
      <View>
        <View style={styles.titleStyle}>
          <Text style={styles.titleText}>Create a Task</Text>
        </View>
        <View>
          <View style={styles.titleStyle}>
            <Text style={styles.subtitles}>Task title</Text>
            <TextInput
              placeholder="Enter the task title"
              placeholderTextColor="#a9a6a6"
              style={styles.inputStyle}
              value={title}
              onChangeText={(text) => {
                setTitle(text);
              }}
            />
          </View>
          <View style={styles.subtitles}>
            <Text style={styles.subtitles}>Task Type</Text>
            <View style={styles.buttonContainer}>
              <Picker
                selectedValue={type}
                style={styles.pickersStyle}
                onValueChange={(value, itemIndex) =>
                  setType(value)
                }>
                <Picker.Item label="Select the Task Type" />
                <Picker.Item label="Important" value="Important" />
                <Picker.Item label="Planned" value="Planned" />
              </Picker>
            </View>
          </View>
          <View>
            <Text style={styles.subtitles}>Choose date & time</Text>
            <View>
              <DatePicker
                style={styles.datePicker}
                date={date}
                mode="date"
                format="YYYY-MM-DD"
                minDate={new Date()}
                maxDate={
                  new Date(
                    new Date().getFullYear(),
                    new Date().getMonth() + 5,
                    new Date().getDate(),
                  )
                }
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={(date: string) => {
                  setDate(date);
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{justifyContent: 'center', alignSelf: 'center', padding: 10}}>
          <ButtonBlue title="Submit Task" onPress={taskAdd} />
        </View>
      </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    marginTop: cardHeight * 0.3,
    width: carWidth - cardHeight * 0.4,
  },
  inputStyle: {
    width: carWidth - cardHeight * 0.2,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    height: cardHeight * 0.9,
    fontSize: 18,
    borderRadius: 10,
    paddingLeft: 10,
  },
  titleStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  titleText: {
    fontSize: cardHeight * 0.5,
    fontWeight: '700',
  },
  subtitles: {
    padding: 5,
    fontSize: cardHeight * 0.4,
    marginBottom: 10,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius:10
  },
  pickersStyle:{
    width:carWidth*0.9,
    height:cardHeight,
    borderWidth: 1,
    borderColor:'#000',
    fontSize:18
  },
});

export default AddTaskScreen;
